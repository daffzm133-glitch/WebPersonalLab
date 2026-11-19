"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string | null;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, caption, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-sm font-medium text-white hover:bg-white/25 transition cursor-pointer"
        >
          <X className="h-4 w-4" />
          Tutup
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption || "Preview gambar"}
          className="max-h-[80vh] w-auto rounded-2xl border border-white/15 bg-slate-900 shadow-2xl object-contain"
        />
        {caption && (
          <p className="mt-3 max-w-2xl text-center text-sm text-slate-200 bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
