"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle2,
  Code2,
  FolderKanban,
  GraduationCap,
  Layers,
  Mail,
  Sparkles,
  StickyNote,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import type { DayNumber } from "@/types/curriculum";

export function HomeClient() {
  const { data } = usePortfolio();
  const [selectedDay, setSelectedDay] = useState<DayNumber | "all">("all");
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);

  const totalModules = data.modules.length;
  const completedModules = data.modules.filter((m) => m.status === "completed").length;
  const progressPct = Math.round((completedModules / Math.max(totalModules, 1)) * 100);

  const allProjects = data.modules.flatMap((m) =>
    m.projects.map((p) => ({ ...p, module: m }))
  );
  const featuredProjects = allProjects.filter((p) => p.featured).slice(0, 6);
  const totalNotes = data.modules.reduce((acc, m) => acc + m.notes.length, 0);
  const totalTutorials = data.modules.reduce((acc, m) => acc + m.tutorials.length, 0);

  const visibleDays =
    selectedDay === "all"
      ? DAYS_META
      : DAYS_META.filter((d) => d.day === selectedDay);

  return (
    <div className="pb-12">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#fffdf7] via-[#f8fafc] to-[#fafaf7] bg-maker-grid">
        {/* Decorative colorful STEM blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>{data.profile.programName}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] text-emerald-700">
                  {data.profile.year}
                </span>
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                Catatan, Tutorial &{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                  Portofolio STEAM
                </span>{" "}
                4 Hari
              </h1>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                Halo, saya <strong className="text-slate-900">{data.profile.name}</strong>.{" "}
                {data.profile.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#kurikulum"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800 hover:-translate-y-0.5 transition"
                >
                  Jelajahi 12 Halaman Materi
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/40 transition"
                >
                  <FolderKanban className="h-4 w-4 text-emerald-600" />
                  Lihat Semua Karya ({allProjects.length})
                </Link>
              </div>
            </div>

            {/* Right Progress & Stats Bento Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Progres Pelatihan
                    </p>
                    <h2 className="font-display text-xl font-bold text-slate-900">
                      Perjalanan 4 Hari Belajar
                    </h2>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 font-display text-lg font-extrabold text-emerald-700">
                    {progressPct}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 transition-all duration-500"
                      style={{ width: `${Math.max(progressPct, 6)}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>
                      {completedModules} dari {totalModules} modul selesai
                    </span>
                    <span className="text-emerald-700">Hari Ke-1 Tuntas!</span>
                  </div>
                </div>

                {/* 4 Mini Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-3.5">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <Layers className="h-4 w-4" />
                      <span className="text-xs font-bold">Modul Materi</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalModules}
                    </p>
                    <p className="text-[11px] text-slate-500">12 halaman terpisah</p>
                  </div>

                  <div className="rounded-2xl bg-sky-50/80 border border-sky-100 p-3.5">
                    <div className="flex items-center gap-2 text-sky-700">
                      <FolderKanban className="h-4 w-4" />
                      <span className="text-xs font-bold">Total Project</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {allProjects.length}
                    </p>
                    <p className="text-[11px] text-slate-500">Karya & file unduhan</p>
                  </div>

                  <div className="rounded-2xl bg-violet-50/80 border border-violet-100 p-3.5">
                    <div className="flex items-center gap-2 text-violet-700">
                      <GraduationCap className="h-4 w-4" />
                      <span className="text-xs font-bold">Tutorial Ajar</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalTutorials}
                    </p>
                    <p className="text-[11px] text-slate-500">Step-by-step siap ajar</p>
                  </div>

                  <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-3.5">
                    <div className="flex items-center gap-2 text-amber-700">
                      <StickyNote className="h-4 w-4" />
                      <span className="text-xs font-bold">Catatan & Tips</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalNotes}
                    </p>
                    <p className="text-[11px] text-slate-500">Cheat sheet & konsep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4-DAY INTERACTIVE ROADMAP ==================== */}
      <section id="kurikulum" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Kurikulum Praktik & Silabus Intensif
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
              Project Pembelajaran Selama 4 Hari
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Klik salah satu dari <strong>12 materi</strong> di bawah untuk membuka halaman khusus
              yang berisi <strong>Project & Karya</strong>, <strong>Catatan & Shortcut</strong>,
              serta <strong>Tutorial Siap Ajar</strong>.
            </p>
          </div>

          {/* Day Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDay("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedDay === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Semua (4 Hari)
            </button>
            {DAYS_META.map((d) => {
              const accent = ACCENT_STYLES[d.accentColor];
              const active = selectedDay === d.day;
              return (
                <button
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    active
                      ? `${accent.badgeSolid} shadow-sm`
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Days Grid */}
        <div className="space-y-8">
          {visibleDays.map((dayInfo) => {
            const accent = ACCENT_STYLES[dayInfo.accentColor];
            const dayMods = data.modules.filter((m) => m.day === dayInfo.day);
            const dayDone = dayMods.filter((m) => m.status === "completed").length;

            return (
              <div
                key={dayInfo.day}
                className={`rounded-3xl border ${accent.border} bg-white p-5 sm:p-7 shadow-sm`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${accent.badgeSolid}`}
                      >
                        {dayInfo.label}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {dayInfo.themeTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500">{dayInfo.description}</p>
                  </div>
                  <span
                    className={`self-start sm:self-center shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${accent.badge}`}
                  >
                    {dayDone} / {dayMods.length} Selesai
                  </span>
                </div>

                {/* 3 Module Cards for this Day */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {dayMods.map((mod) => {
                    const status = STATUS_META[mod.status];
                    const coverImg = mod.projects[0]?.image;

                    return (
                      <Link
                        key={mod.slug}
                        href={`/materi/${mod.slug}`}
                        className={`group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${accent.borderHover}`}
                      >
                        <div>
                          {/* Top Row */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-md ${accent.iconBg}`}
                            >
                              <ModuleIcon name={mod.iconName} className="h-5 w-5" />
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${status.badge}`}
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                              {status.label}
                            </span>
                          </div>

                          {/* Optional Mini Cover Preview for completed modules */}
                          {coverImg && (
                            <div className="mb-3 h-36 w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={coverImg}
                                alt={mod.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                              />
                            </div>
                          )}

                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Modul #{mod.order} • {mod.category}
                          </p>
                          <h4 className="mt-0.5 font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
                            {mod.title}
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
                            {mod.tagline}
                          </p>
                        </div>

                        {/* Footer Counters */}
                        <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3 text-slate-500 font-medium">
                            <span>{mod.projects.length} Project</span>
                            <span>•</span>
                            <span>{mod.tutorials.length} Tutorial</span>
                            <span>•</span>
                            <span>{mod.notes.length} Catatan</span>
                          </div>
                          <span
                            className={`inline-flex items-center gap-1 font-bold ${accent.text} group-hover:translate-x-0.5 transition`}
                          >
                            Buka <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== FEATURED PROJECTS SHOWCASE ==================== */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
              Portofolio Karya Praktik
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
              Karya Unggulan Hari Ke-1
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Dokumentasi asli hasil praktik robotika LEGO WeDo, desain 3D Tinkercad (.STL), dan
              game Scratch (.sb3).
            </p>
          </div>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
          >
            Lihat Galeri Lengkap ({allProjects.length} Karya)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((item) => {
            const accent = ACCENT_STYLES[item.module.accentColor];
            return (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div
                  className="relative h-52 w-full overflow-hidden bg-slate-100 cursor-zoom-in"
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
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${accent.badgeSolid}`}
                    >
                      Hari {item.module.day} • {item.module.shortTitle}
                    </span>
                    {item.stlUrl && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-sm">
                        <Box className="h-3 w-3" /> 3D View
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-emerald-700">{item.subtitle}</p>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/materi/${item.module.slug}`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-slate-900 hover:text-emerald-700"
                    >
                      Detail & Tutorial <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== PORTFOLIO PROFILE & TEACHING MISSION ==================== */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-7 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                <BookOpen className="h-3.5 w-3.5" /> Portofolio & Modul Ajar Sekolah
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                {data.profile.name} — {data.profile.role}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {data.profile.mission}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {data.profile.github && (
                  <a
                    href={data.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-emerald-50 transition"
                  >
                    <Code2 className="h-4 w-4" /> GitHub ({data.profile.displayName})
                  </a>
                )}
                {data.profile.email && (
                  <a
                    href={`mailto:${data.profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
                  >
                    <Mail className="h-4 w-4" /> {data.profile.email}
                  </a>
                )}
                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-400 transition"
                >
                  <GraduationCap className="h-4 w-4" /> Buka Pusat Tutorial
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Keterampilan & Tools Pelatihan
              </p>
              <div className="flex flex-wrap gap-2">
                {data.profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
