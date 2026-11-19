"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw, Pause, Play, Download, Box } from "lucide-react";

interface StlViewerProps {
  url: string;
  title?: string;
}

interface ParsedStl {
  positions: Float32Array;
  normals: Float32Array;
  vertexCount: number;
}

const FILAMENT_COLORS = [
  { name: "Merah PLA", rgb: [0.92, 0.28, 0.28] as [number, number, number], swatch: "bg-red-500" },
  { name: "Emerald", rgb: [0.12, 0.72, 0.52] as [number, number, number], swatch: "bg-emerald-500" },
  { name: "Biru Maker", rgb: [0.22, 0.54, 0.96] as [number, number, number], swatch: "bg-blue-500" },
  { name: "Emas", rgb: [0.95, 0.68, 0.16] as [number, number, number], swatch: "bg-amber-400" },
];

function parseBinaryStl(buffer: ArrayBuffer): ParsedStl {
  const view = new DataView(buffer);
  const triCount = view.getUint32(80, true);
  const expectedSize = 84 + triCount * 50;

  if (buffer.byteLength < expectedSize || triCount === 0 || triCount > 500000) {
    throw new Error("Format STL tidak didukung atau kosong.");
  }

  const positions = new Float32Array(triCount * 9);
  const normals = new Float32Array(triCount * 9);

  let minX = Infinity,
    minY = Infinity,
    minZ = Infinity;
  let maxX = -Infinity,
    maxY = -Infinity,
    maxZ = -Infinity;

  let offset = 84;
  for (let i = 0; i < triCount; i++) {
    const nx = view.getFloat32(offset, true);
    const ny = view.getFloat32(offset + 4, true);
    const nz = view.getFloat32(offset + 8, true);
    offset += 12;

    const base = i * 9;
    for (let v = 0; v < 3; v++) {
      const vx = view.getFloat32(offset, true);
      const vy = view.getFloat32(offset + 4, true);
      const vz = view.getFloat32(offset + 8, true);
      offset += 12;

      positions[base + v * 3] = vx;
      positions[base + v * 3 + 1] = vy;
      positions[base + v * 3 + 2] = vz;

      if (vx < minX) minX = vx;
      if (vy < minY) minY = vy;
      if (vz < minZ) minZ = vz;
      if (vx > maxX) maxX = vx;
      if (vy > maxY) maxY = vy;
      if (vz > maxZ) maxZ = vz;
    }

    // Compute clean geometric normal if file normal is zero
    let fnx = nx,
      fny = ny,
      fnz = nz;
    if (Math.abs(fnx) + Math.abs(fny) + Math.abs(fnz) < 1e-6) {
      const ax = positions[base + 3] - positions[base];
      const ay = positions[base + 4] - positions[base + 1];
      const az = positions[base + 5] - positions[base + 2];
      const bx = positions[base + 6] - positions[base];
      const by = positions[base + 7] - positions[base + 1];
      const bz = positions[base + 8] - positions[base + 2];
      fnx = ay * bz - az * by;
      fny = az * bx - ax * bz;
      fnz = ax * by - ay * bx;
      const len = Math.hypot(fnx, fny, fnz) || 1;
      fnx /= len;
      fny /= len;
      fnz /= len;
    }

    for (let v = 0; v < 3; v++) {
      normals[base + v * 3] = fnx;
      normals[base + v * 3 + 1] = fny;
      normals[base + v * 3 + 2] = fnz;
    }

    offset += 2; // attribute byte count
  }

  // Center & normalize scale to [-1, 1]
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const maxDim = Math.max(maxX - minX, maxY - minY, maxZ - minZ) || 1;
  const scale = 1.9 / maxDim;

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (positions[i] - cx) * scale;
    positions[i + 1] = (positions[i + 1] - cy) * scale;
    positions[i + 2] = (positions[i + 2] - cz) * scale;
  }

  return { positions, normals, vertexCount: triCount * 3 };
}

function mat4Perspective(fovRad: number, aspect: number, near: number, far: number) {
  const f = 1.0 / Math.tan(fovRad / 2);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ]);
}

function mat4ModelView(rotX: number, rotY: number, zoom: number) {
  const cx = Math.cos(rotX),
    sx = Math.sin(rotX);
  const cy = Math.cos(rotY),
    sy = Math.sin(rotY);

  // R = Rx * Ry, then translate Z = -zoom
  return new Float32Array([
    cy, sx * sy, -cx * sy, 0,
    0, cx, sx, 0,
    sy, -sx * cy, cx * cy, 0,
    0, 0, -zoom, 1,
  ]);
}

export function StlViewer({ url, title = "Model 3D (.STL)" }: StlViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [triCount, setTriCount] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [colorIdx, setColorIdx] = useState<number>(0);

  const stateRef = useRef({
    rotX: -0.75,
    rotY: 0.55,
    zoom: 3.1,
    dragging: false,
    lastX: 0,
    lastY: 0,
    autoRotate: true,
    color: FILAMENT_COLORS[0].rgb,
  });

  useEffect(() => {
    stateRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    stateRef.current.color = FILAMENT_COLORS[colorIdx].rgb;
  }, [colorIdx]);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;

    async function init() {
      try {
        setStatus("loading");
        const res = await fetch(url);
        if (!res.ok) throw new Error("Gagal mengunduh file STL");
        const buf = await res.arrayBuffer();
        if (cancelled) return;

        const mesh = parseBinaryStl(buf);
        setTriCount(mesh.vertexCount / 3);

        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
        if (!gl) throw new Error("WebGL tidak tersedia di browser ini");

        const vsSource = `
          attribute vec3 aPos;
          attribute vec3 aNorm;
          uniform mat4 uProj;
          uniform mat4 uMV;
          varying vec3 vNormal;
          varying vec3 vPos;
          void main() {
            vec4 mvPos = uMV * vec4(aPos, 1.0);
            vPos = mvPos.xyz;
            vNormal = normalize(mat3(uMV) * aNorm);
            gl_Position = uProj * mvPos;
          }
        `;
        const fsSource = `
          precision mediump float;
          varying vec3 vNormal;
          varying vec3 vPos;
          uniform vec3 uColor;
          void main() {
            vec3 n = normalize(vNormal);
            vec3 light1 = normalize(vec3(0.5, 0.8, 1.0));
            vec3 light2 = normalize(vec3(-0.7, -0.4, 0.5));
            float diff1 = max(dot(n, light1), 0.0);
            float diff2 = max(dot(n, light2), 0.0) * 0.35;
            vec3 viewDir = normalize(-vPos);
            vec3 halfDir = normalize(light1 + viewDir);
            float spec = pow(max(dot(n, halfDir), 0.0), 32.0) * 0.28;
            vec3 col = uColor * (0.28 + diff1 * 0.68 + diff2) + vec3(spec);
            gl_FragColor = vec4(col, 1.0);
          }
        `;

        const compile = (type: number, src: string) => {
          const sh = gl.createShader(type)!;
          gl.shaderSource(sh, src);
          gl.compileShader(sh);
          return sh;
        };

        const prog = gl.createProgram()!;
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsSource));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const posBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.positions, gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(prog, "aPos");
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

        const normBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, normBuf);
        gl.bufferData(gl.ARRAY_BUFFER, mesh.normals, gl.STATIC_DRAW);
        const aNorm = gl.getAttribLocation(prog, "aNorm");
        gl.enableVertexAttribArray(aNorm);
        gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);

        const uProj = gl.getUniformLocation(prog, "uProj");
        const uMV = gl.getUniformLocation(prog, "uMV");
        const uColor = gl.getUniformLocation(prog, "uColor");

        gl.enable(gl.DEPTH_TEST);
        setStatus("ready");

        const render = () => {
          if (cancelled) return;
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const w = Math.floor(canvas.clientWidth * dpr);
          const h = Math.floor(canvas.clientHeight * dpr);
          if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
          }
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

          if (stateRef.current.autoRotate && !stateRef.current.dragging) {
            stateRef.current.rotY += 0.008;
          }

          const proj = mat4Perspective(
            (42 * Math.PI) / 180,
            canvas.width / Math.max(canvas.height, 1),
            0.1,
            100
          );
          const mv = mat4ModelView(
            stateRef.current.rotX,
            stateRef.current.rotY,
            stateRef.current.zoom
          );

          gl.uniformMatrix4fv(uProj, false, proj);
          gl.uniformMatrix4fv(uMV, false, mv);
          gl.uniform3fv(uColor, stateRef.current.color);

          gl.drawArrays(gl.TRIANGLES, 0, mesh.vertexCount);
          rafId = requestAnimationFrame(render);
        };

        render();
      } catch (err) {
        console.error("STL Viewer error:", err);
        if (!cancelled) setStatus("error");
      }
    }

    init();
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [url]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    stateRef.current.dragging = true;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!stateRef.current.dragging) return;
    const dx = e.clientX - stateRef.current.lastX;
    const dy = e.clientY - stateRef.current.lastY;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
    stateRef.current.rotY += dx * 0.01;
    stateRef.current.rotX = Math.max(
      -Math.PI / 1.1,
      Math.min(Math.PI / 1.1, stateRef.current.rotX + dy * 0.01)
    );
  };

  const handlePointerUp = () => {
    stateRef.current.dragging = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    stateRef.current.zoom = Math.max(
      1.6,
      Math.min(6, stateRef.current.zoom + e.deltaY * 0.002)
    );
  };

  const resetCamera = () => {
    stateRef.current.rotX = -0.75;
    stateRef.current.rotY = 0.55;
    stateRef.current.zoom = 3.1;
  };

  return (
    <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 overflow-hidden shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-white/10 bg-slate-950/40">
        <div className="flex items-center gap-2 text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
            <Box className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold tracking-wide text-emerald-300 uppercase">
              Interactive 3D STL Viewer
            </p>
            <p className="text-xs text-slate-300">
              {title} {triCount > 0 ? `• ${triCount.toLocaleString("id-ID")} segitiga` : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {FILAMENT_COLORS.map((c, idx) => (
            <button
              key={c.name}
              title={`Warna filamen: ${c.name}`}
              onClick={() => setColorIdx(idx)}
              className={`h-5 w-5 rounded-full ${c.swatch} transition cursor-pointer ${
                colorIdx === idx
                  ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          ))}
          <button
            onClick={() => setAutoRotate((v) => !v)}
            className="ml-2 inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition cursor-pointer"
            title="Putar otomatis"
          >
            {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {autoRotate ? "Pause" : "Putar"}
          </button>
          <button
            onClick={resetCamera}
            className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition cursor-pointer"
            title="Reset sudut pandang"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="relative h-72 sm:h-80 w-full select-none">
        {/* Subtle workplane grid visual */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(52,211,153,0.45) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={handleWheel}
          className="h-full w-full cursor-grab active:cursor-grabbing touch-none"
        />

        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-emerald-200">
            Memuat model 3D (.STL)...
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-sm text-slate-300">
            <p>Preview 3D tidak tersedia di perangkat ini.</p>
            <a
              href={url}
              download
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white"
            >
              <Download className="h-3.5 w-3.5" /> Unduh File .STL
            </a>
          </div>
        )}

        <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-300 backdrop-blur-sm border border-white/10">
          Geser (drag) untuk memutar • Scroll untuk zoom
        </div>
      </div>
    </div>
  );
}
