"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Box,
  Download,
  FolderKanban,
  Search,
  ZoomIn,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META } from "@/lib/theme";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { DayNumber } from "@/types/curriculum";

export default function PortofolioPage() {
  const { data } = usePortfolio();
  const [dayFilter, setDayFilter] = useState<DayNumber | "all">("all");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);

  const allProjects = useMemo(() => {
    return data.modules.flatMap((mod) =>
      mod.projects.map((p) => ({ ...p, module: mod }))
    );
  }, [data.modules]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProjects.filter((item) => {
      if (dayFilter !== "all" && item.module.day !== dayFilter) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.module.title.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [allProjects, dayFilter, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="glass-panel rounded-3xl p-7 sm:p-9">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/90 border border-blue-200/80 px-3 py-1 text-xs font-bold text-blue-900">
                <FolderKanban className="h-3.5 w-3.5" /> My Projects • Personal Digital Lab
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                My Projects &amp; Karya Praktik
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Kumpulan hasil karya dan project yang dikembangkan oleh{" "}
                <strong>{data.profile.name}</strong> selama mengikuti pelatihan di{" "}
                <strong>IDN SMSIT</strong> maupun eksplorasi teknologi — lengkap dengan dokumentasi
                proses, file unduhan, dan preview 3D.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari project, tag, atau materi..."
                className="w-full rounded-2xl border border-white/90 bg-white/80 py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm backdrop-blur-md focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/60 pt-5">
            <button
              onClick={() => setDayFilter("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                dayFilter === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "glass-pill text-slate-600 hover:bg-white"
              }`}
            >
              Semua ({allProjects.length})
            </button>
            {DAYS_META.map((d) => {
              const count = allProjects.filter((p) => p.module.day === d.day).length;
              const accent = ACCENT_STYLES[d.accentColor];
              return (
                <button
                  key={d.day}
                  onClick={() => setDayFilter(d.day)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                    dayFilter === d.day
                      ? `${accent.badgeSolid} shadow-sm`
                      : "glass-pill text-slate-600 hover:bg-white"
                  }`}
                >
                  {d.label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Grid */}
      {filtered.length === 0 ? (
        <ScrollReveal direction="up">
          <div className="glass-panel rounded-3xl border-2 border-dashed border-slate-300 p-12 text-center space-y-3">
            <p className="font-display text-lg font-bold text-slate-900">
              Belum ada karya di filter ini
            </p>
            <p className="text-sm text-slate-500">
              Coba pilih filter hari lain atau tambahkan karya baru melalui Dashboard Admin.
            </p>
          </div>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => {
            const accent = ACCENT_STYLES[item.module.accentColor];
            return (
              <ScrollReveal key={item.id} direction="up" delay={(idx % 3) * 100}>
                <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5">
                  <div
                    className="relative h-52 w-full overflow-hidden bg-slate-100/80 cursor-zoom-in"
                    onClick={() =>
                      setLightbox({ src: item.image, caption: `${item.title} — ${item.subtitle}` })
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${accent.badgeSolid}`}>
                        Hari {item.module.day} • {item.module.shortTitle}
                      </span>
                      {item.stlUrl && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-sm">
                          <Box className="h-3 w-3" /> 3D STL
                        </span>
                      )}
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-lg bg-slate-900/70 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      <ZoomIn className="h-3 w-3" /> Zoom
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                    <div>
                      <h2 className="font-display text-lg font-bold text-slate-900">
                        {item.title}
                      </h2>
                      <p className={`mt-0.5 text-xs font-bold ${accent.text}`}>{item.subtitle}</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-white/80 border border-slate-200/70 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 border-t border-slate-200/60 pt-4">
                      {item.downloadUrl ? (
                        <a
                          href={item.downloadUrl}
                          download
                          className="inline-flex items-center gap-1.5 rounded-xl bg-white/85 border border-slate-200/80 px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-white transition"
                        >
                          <Download className="h-3.5 w-3.5" /> Unduh File
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">{item.date}</span>
                      )}
                      <Link
                        href={`/materi/${item.module.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800"
                      >
                        Buka Halaman Materi <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      )}

      <ImageLightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
