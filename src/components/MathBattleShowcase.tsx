"use client";

import { useState } from "react";
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Info,
  Laptop,
  Layout,
  Monitor,
  Play,
  QrCode,
  RefreshCw,
  Smartphone,
  Sparkles,
  Tablet,
  Target,
  Trophy,
  User,
  Zap,
} from "lucide-react";

export const MATH_BATTLE_PUBLIC_URL =
  "https://pilandok-9yl142.my.canva.site/math-battle-edu-game-website";

type ViewportMode = "desktop" | "tablet" | "mobile";
type PreviewMode = "showcase" | "embed";

interface MathBattleShowcaseProps {
  onOpenImage?: (src: string, caption: string) => void;
}

export function MathBattleShowcase({ onOpenImage }: MathBattleShowcaseProps) {
  const [previewMode, setPreviewMode] = useState<PreviewMode>("showcase");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  const handleLaunchPopupGame = () => {
    const width = 1200;
    const height = 820;
    const left = Math.max(0, Math.round((window.screen.width - width) / 2));
    const top = Math.max(0, Math.round((window.screen.height - height) / 2));
    window.open(
      MATH_BATTLE_PUBLIC_URL,
      "MathBattleGameWindow",
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=yes,status=no,resizable=yes,scrollbars=yes`
    );
  };

  const viewportWidthClass =
    viewport === "desktop"
      ? "w-full"
      : viewport === "tablet"
        ? "max-w-[768px] mx-auto"
        : "max-w-[390px] mx-auto";

  return (
    <div className="space-y-8">
      {/* ==================== 1. PROJECT INTRODUCTION & 6. PROJECT INFORMATION ==================== */}
      <section className="overflow-hidden rounded-3xl border border-amber-200/90 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-900 px-6 py-5 sm:px-8 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-display font-black text-lg shadow-md">
              ✦
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/20 border border-amber-300/40 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                  Educational Technology • Educational Game
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-bold text-sky-200">
                  IDN SMSIT Training Project
                </span>
              </div>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                MATH BATTLE — Educational Game Website
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleLaunchPopupGame}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md hover:bg-amber-300 transition cursor-pointer"
            >
              <Gamepad2 className="h-4 w-4" />
              Mainkan Langsung (Popup Interaktif)
            </button>
            <a
              href={MATH_BATTLE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 border border-white/25 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/25 transition"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Buka di Tab Baru
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* 1. Project Introduction */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
                01 • Project Introduction
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                Dokumentasi Proyek &amp; Produk Permainan Edukasi Matematika
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>MATH BATTLE</strong> merupakan proyek website permainan edukasi matematika
                (<em>Educational Game Website</em>) yang dikembangkan menggunakan{" "}
                <strong>Canva</strong> sebagai hasil praktik dan pembelajaran selama mengikuti
                pelatihan intensif <strong>IDN SMSIT</strong>. Proyek ini dihadirkan di{" "}
                <strong>Personal Digital Lab</strong> dengan dua fungsi utama: sebagai{" "}
                <strong>dokumentasi proyek pembelajaran</strong> sekaligus{" "}
                <strong>produk digital interaktif</strong> yang dapat dicoba langsung oleh
                pengunjung.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-800">
                  <Target className="h-4 w-4 text-blue-600" />
                  Tujuan Pengembangan
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Menciptakan media belajar matematika berbasis web yang lebih seru, kompetitif, dan
                  mudah diakses oleh siswa untuk melatih ketangkasan berhitung melalui konsep
                  petualangan &amp; tantangan angka.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800">
                  <GraduationCap className="h-4 w-4 text-amber-600" />
                  Latar Belakang Pelatihan
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dikembangkan pada modul <em>Design dengan Canva</em> dalam pelatihan{" "}
                  <strong>IDN SMSIT</strong> untuk mempraktikkan pemanfaatan Canva dalam merancang
                  dan mempublikasikan website edukasi interaktif.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Project Information Table */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                    06 • Project Information
                  </p>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Identitas Resmi Proyek
                  </h4>
                </div>
                <span className="rounded-full bg-emerald-100 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  Published • Live
                </span>
              </div>

              <dl className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Project</dt>
                  <dd className="font-display font-extrabold text-slate-900">MATH BATTLE</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Category</dt>
                  <dd className="font-bold text-blue-800">Educational Technology</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Type</dt>
                  <dd className="font-bold text-slate-800">Educational Game Website</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Platform</dt>
                  <dd className="font-semibold text-slate-700">Canva (Canva Websites)</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Learning Program</dt>
                  <dd className="font-bold text-slate-900">IDN SMSIT</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500 flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-slate-400" /> Creator
                  </dt>
                  <dd className="font-bold text-slate-900">Daffa Zidan</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500 flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 text-slate-400" /> Affiliation
                  </dt>
                  <dd className="font-bold text-blue-900">Pondok Tholabie</dd>
                </div>
              </dl>

              <div className="rounded-xl bg-white border border-slate-200 p-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Canva Public Game Link
                  </p>
                  <p className="text-xs font-mono font-semibold text-blue-700 truncate">
                    {MATH_BATTLE_PUBLIC_URL}
                  </p>
                </div>
                <a
                  href={MATH_BATTLE_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-blue-900 transition"
                >
                  Buka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. PROJECT OVERVIEW ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            02 • Project Overview
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Menggabungkan Permainan &amp; Pembelajaran Matematika Secara Interaktif
          </h3>
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          <strong>MATH BATTLE</strong> dirancang dengan semangat{" "}
          <em>&ldquo;Petualangan Matematika Dimulai! Asah Otak, Taklukkan Angka!&rdquo;</em> untuk
          mengubah latihan matematika dari aktivitas yang terasa kaku menjadi tantangan permainan
          digital yang menyenangkan. Melalui antarmuka visual yang cerah dan terstruktur, pemain
          diajak untuk mengasah kemampuan berhitung, menantang teman, dan membuktikan ketangkasan
          mereka dalam menyelesaikan soal matematika.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">
              Gamifikasi Latihan Berhitung
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mengemas latihan angka dan operasi matematika ke dalam format permainan interaktif
              agar siswa terdorong untuk terus berlatih tanpa merasa cepat bosan.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
              <Trophy className="h-5 w-5" />
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">
              Semangat Kompetisi Sehat
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dilengkapi konsep papan peringkat (<em>Leaderboard</em>) dan identitas pemain untuk
              memotivasi siswa menantang teman serta meningkatkan capaian hasil belajar.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200/80 bg-sky-50/50 p-5 space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
              <Laptop className="h-5 w-5" />
            </div>
            <h4 className="font-display text-base font-bold text-slate-900">
              Akses Web Instan (Canva Site)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dipublikasikan sebagai website publik melalui Canva sehingga dapat langsung dibuka dan
              dimainkan melalui browser laptop, tablet, maupun smartphone melalui tautan atau QR
              Code.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 3. GAME PREVIEW & PLAY (CANVA INTEGRATION) ==================== */}
      <section
        id="math-battle-play"
        className="overflow-hidden rounded-3xl border-2 border-indigo-200 bg-white shadow-md"
      >
        {/* Top Toolbar */}
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 sm:px-7 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                03 • Game Preview &amp; Play — Interactive Product Showcase
              </p>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-extrabold">
              Uji Coba &amp; Mainkan MATH BATTLE
            </h3>
          </div>

          {/* Mode & Viewport Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Switch between Visual Launcher & Direct Iframe Embed */}
            <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setPreviewMode("showcase")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  previewMode === "showcase"
                    ? "bg-amber-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                Game Launcher
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode("embed")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  previewMode === "embed"
                    ? "bg-amber-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Layout className="h-3.5 w-3.5" />
                Live Embed Frame
              </button>
            </div>

            {/* Responsive Viewport Selector */}
            <div className="hidden sm:inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Tampilan Desktop"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "desktop"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tampilan Tablet"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "tablet"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Tampilan Mobile"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "mobile"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>

            <a
              href={MATH_BATTLE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2 text-xs font-extrabold text-slate-950 hover:bg-amber-300 transition"
            >
              <Play className="h-3.5 w-3.5 fill-slate-950" />
              Main di Tab Baru
            </a>
          </div>
        </div>

        {/* Browser Mockup Address Bar */}
        <div className="border-b border-slate-200 bg-slate-100 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>

          <div className="flex-1 max-w-2xl rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-mono text-slate-600 flex items-center justify-between gap-2 truncate">
            <span className="truncate">{MATH_BATTLE_PUBLIC_URL}</span>
            <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-sans font-bold text-emerald-700 border border-emerald-200">
              Canva Public Site
            </span>
          </div>

          <div className="flex items-center gap-2">
            {previewMode === "embed" && (
              <button
                type="button"
                onClick={() => setIframeKey((k) => k + 1)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                title="Muat ulang frame"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reload
              </button>
            )}
            <button
              type="button"
              onClick={handleLaunchPopupGame}
              className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer"
            >
              <Gamepad2 className="h-3.5 w-3.5" />
              Buka Jendela Game
            </button>
          </div>
        </div>

        {/* Responsive Preview Container */}
        <div className="bg-slate-900/95 p-4 sm:p-6">
          <div className={`${viewportWidthClass} transition-all duration-300`}>
            {previewMode === "showcase" ? (
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-700 via-blue-700 to-violet-800 text-white shadow-2xl">
                {/* Interactive Replica Header of MATH BATTLE */}
                <div className="bg-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-slate-800 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-sm">
                      ✦
                    </span>
                    <span className="font-display text-base font-black tracking-tight text-blue-700">
                      MATH BATTLE
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-5 text-xs font-bold text-slate-600">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-0.5">
                      Beranda
                    </span>
                    <span>Cara Bermain</span>
                    <span>Leaderboard</span>
                    <span>Profil / Login</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                    🚀 Pemain
                  </span>
                </div>

                {/* Main Hero Stage */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-10 lg:items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                      ⚡ PETUALANGAN MATEMATIKA DIMULAI!
                    </span>
                    <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight">
                      ASAH OTAK,{" "}
                      <span className="block text-amber-300">TAKLUKKAN ANGKA!</span>
                    </h4>
                    <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                      Belajar matematika jadi lebih seru. Tantang temanmu dan buktikan siapa yang
                      paling jago!
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleLaunchPopupGame}
                        className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 hover:bg-amber-300 hover:scale-[1.02] transition cursor-pointer"
                      >
                        <Gamepad2 className="h-5 w-5" />
                        MAIN SEKARANG (POPUP GAME)
                      </button>

                      <a
                        href={MATH_BATTLE_PUBLIC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-blue-800 shadow-md hover:bg-blue-50 transition"
                      >
                        <ExternalLink className="h-4 w-4" />
                        + BUAT GAME / BUKA TAB BARU
                      </a>
                    </div>

                    <p className="text-xs text-blue-200/90 pt-1">
                      Klik <strong>&ldquo;MAIN SEKARANG&rdquo;</strong> untuk membuka jendela
                      permainan interaktif MATH BATTLE atau buka di tab baru.
                    </p>
                  </div>

                  {/* Preview Screenshot & QR Card */}
                  <div className="lg:col-span-5 space-y-3">
                    <div
                      onClick={() =>
                        onOpenImage?.(
                          "/assets/canva/math-battle-canva-preview.jpg",
                          "Tampilan Antarmuka Website Permainan Edukasi MATH BATTLE di Canva"
                        )
                      }
                      className="group relative overflow-hidden rounded-2xl border-2 border-white/25 bg-slate-950 shadow-xl cursor-zoom-in"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/canva/math-battle-canva-preview.jpg"
                        alt="MATH BATTLE Canva Game Preview"
                        className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-3.5">
                        <span className="text-xs font-bold text-white">
                          Preview Antarmuka MATH BATTLE
                        </span>
                        <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-[11px] font-extrabold text-slate-950">
                          Klik Perbesar
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/20 p-3.5 backdrop-blur-sm flex items-center gap-3.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/canva/math-battle-qrcode.png"
                        alt="QR Code MATH BATTLE"
                        onClick={() =>
                          onOpenImage?.(
                            "/assets/canva/math-battle-qrcode.png",
                            "Scan QR Code untuk memainkan MATH BATTLE langsung di Smartphone"
                          )
                        }
                        className="h-16 w-16 shrink-0 rounded-xl bg-white p-1 object-contain cursor-zoom-in"
                      />
                      <div className="text-xs space-y-1">
                        <p className="font-extrabold text-amber-300 flex items-center gap-1">
                          <QrCode className="h-3.5 w-3.5" /> Scan &amp; Main di HP
                        </p>
                        <p className="text-blue-100 leading-snug">
                          Pindai QR Code ini dengan kamera smartphone untuk mencoba permainan MATH
                          BATTLE secara mobile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Direct Live Iframe Embed Mode with automatic fallback bar */
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl">
                  <iframe
                    key={iframeKey}
                    src={MATH_BATTLE_PUBLIC_URL}
                    title="MATH BATTLE — Educational Game Website (Canva)"
                    className="h-[560px] w-full border-0"
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
                <div className="rounded-2xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 shrink-0 text-amber-300" />
                    <span>
                      Domain publik <code className="font-mono">*.my.canva.site</code> menerapkan
                      kebijakan keamanan browser (<code className="font-mono">X-Frame-Options: SAMEORIGIN</code>).
                      Jika layar embed dibatasi oleh browser Anda, gunakan tombol{" "}
                      <strong>Jendela Game Interaktif</strong> atau <strong>Tab Baru</strong>.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleLaunchPopupGame}
                      className="rounded-xl bg-amber-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-300 transition cursor-pointer"
                    >
                      Buka Jendela Game
                    </button>
                    <a
                      href={MATH_BATTLE_PUBLIC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white/15 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/25 transition"
                    >
                      Buka Tab Baru
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== 4. PROJECT FEATURES ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            04 • Project Features
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Fitur &amp; Komponen Antarmuka MATH BATTLE
          </h3>
          <p className="text-sm text-slate-600">
            Berdasarkan implementasi nyata pada website permainan{" "}
            <strong>MATH BATTLE Edu Game Website</strong> yang dirancang dan dipublikasikan di
            Canva:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-extrabold text-blue-800">
              01 • Navigation Bar
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Navigasi Multi-Menu Terstruktur
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Header website dilengkapi identitas logo <strong>MATH BATTLE</strong> serta menu
              navigasi menuju <strong>Beranda</strong>, <strong>Cara Bermain</strong>,{" "}
              <strong>Leaderboard</strong>, dan <strong>Profil / Login</strong> beserta badge status{" "}
              <strong>Pemain</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-800">
              02 • Interactive Actions
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Aksi &ldquo;Main Sekarang&rdquo; &amp; &ldquo;+ Buat Game&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Halaman utama menyediakan dua tombol aksi utama yang jelas bagi pengguna: tombol{" "}
              <strong>MAIN SEKARANG</strong> untuk memulai sesi permainan matematika dan tombol{" "}
              <strong>+ BUAT GAME</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-extrabold text-violet-800">
              03 • Visual Identity
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Ilustrasi Karakter &amp; Ikon Matematika
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menggunakan tema visual biru-ungu dengan tipografi kontras tinggi{" "}
              <em>&ldquo;ASAH OTAK, TAKLUKKAN ANGKA!&rdquo;</em> serta elemen kartu melayang (simbol{" "}
              <code>+</code>, angka <code>7</code>, trofi juara, dan bintang).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
              04 • Gameplay &amp; Guide
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Bagian Cara Bermain &amp; Tantangan Soal
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Memandu pemain memahami aturan permainan matematika serta menyajikan tantangan
              berhitung yang interaktif di dalam halaman web.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-extrabold text-sky-800">
              05 • Leaderboard &amp; Player
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Papan Peringkat (Leaderboard) &amp; Profil
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menyediakan struktur bagian <em>Leaderboard</em> dan <em>Profil / Login</em> untuk
              menampilkan pencapaian pemain serta mendorong semangat berkompetisi dengan teman.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-extrabold text-rose-800">
              06 • Multi-Device Publishing
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Publikasi Web &amp; Akses QR Code
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dipublikasikan ke domain publik Canva (<code className="font-mono">my.canva.site</code>)
              dan dilengkapi QR Code sehingga mudah dibagikan di kelas maupun diakses melalui
              perangkat mobile.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 5. LEARNING & DEVELOPMENT ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-sm space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
              05 • Learning &amp; Development — IDN SMSIT Training Journey
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold">
              Penerapan Pembelajaran &amp; Praktik Teknologi Pendidikan
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Proyek <strong>MATH BATTLE</strong> menjadi bukti nyata bagaimana keterampilan desain
              komunikasi visual dan fitur publikasi web di <strong>Canva</strong> yang dipelajari
              selama pelatihan <strong>IDN SMSIT</strong> dapat diwujudkan menjadi produk{" "}
              <em>Educational Technology</em> yang siap digunakan untuk mendukung kegiatan belajar.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-amber-300">
            <Award className="h-4 w-4" />
            Pondok Tholabie • Educational Media
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              Kompetensi yang Dipelajari &amp; Diterapkan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  Merancang tata letak antarmuka pengguna (<em>UI Layout</em>), hierarki tipografi,
                  dan palet warna untuk website permainan edukasi di Canva.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  Menyusun struktur navigasi halaman web edukasi (Beranda, Cara Bermain,
                  Leaderboard, dan Profil Pemain).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  Mempublikasikan proyek Canva menjadi website publik interaktif beserta pembuatan
                  QR Code akses cepat.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sky-400" />
              Manfaat &amp; Potensi Implementasi di Pondok Tholabie
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Menjadi media pembelajaran matematika interaktif yang dapat dicoba langsung oleh
                  santri/siswa melalui browser komputer maupun HP.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Menjadi referensi bagi pengajar dan santri di <strong>Pondok Tholabie</strong>{" "}
                  dalam mengembangkan media edukasi digital kreatif menggunakan Canva.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Menghubungkan dokumentasi pelatihan <strong>IDN SMSIT</strong> dengan produk nyata
                  yang dapat dibagikan secara terbuka di <strong>Personal Digital Lab</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
