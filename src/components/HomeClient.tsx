"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Box,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  FolderKanban,
  GraduationCap,
  Layers,
  Library,
  Mail,
  ShieldCheck,
  Sparkles,
  StickyNote,
  Users,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import type { DayNumber } from "@/types/curriculum";

const HERO_SLIDES = [
  {
    badge: "NEXORANESIA × TIM IT PONDOK THOLABIE",
    titleLine1: "NEXORANESIA",
    titleLine2: "ROBOTICS & AI",
    description:
      "Membangun generasi inovator masa depan melalui pembelajaran Coding, Robotika, dan Kecerdasan Buatan di pusat pengembangan teknologi Tim IT Pondok Tholabie.",
    ctaLabel: "EXPLORE THE PROGRAM",
    ctaHref: "#training-journey",
    bgImage: "/assets/lego/robot-katak-wedo.jpg",
  },
  {
    badge: "COMPUTER VISION & ARTIFICIAL INTELLIGENCE",
    titleLine1: "NEXORANESIA",
    titleLine2: "AI & VISION LAB",
    description:
      "Eksplorasi Artificial Intelligence, Face Recognition, Hand Tracking, dan Internet of Things (IoT) berbasis PictoBlox serta BBC Micro:bit.",
    ctaLabel: "EXPLORE AI PROJECTS",
    ctaHref: "/materi/ai-pictoblox-microbit",
    bgImage: "/assets/pictoblox/15-hasil-ai-finger-tracking.png",
  },
  {
    badge: "3D ENGINEERING, WEBAR & MOBILE APPS",
    titleLine1: "NEXORANESIA",
    titleLine2: "DIGITAL CREATORS",
    description:
      "Pengembangan pemodelan 3D Printing (.STL), Augmented Reality (MyWebAR & Meshy AI), Game Edukasi Canva AI, hingga aplikasi Android Thunkable.",
    ctaLabel: "EXPLORE ALL PROJECTS",
    ctaHref: "/portofolio",
    bgImage: "/assets/webar/poster-anatomi-ar-final.jpg",
  },
];

export function HomeClient() {
  const { data } = usePortfolio();
  const [selectedDay, setSelectedDay] = useState<DayNumber | "all">("all");
  const [heroSlide, setHeroSlide] = useState<number>(0);
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

  const activeSlide = HERO_SLIDES[heroSlide] || HERO_SLIDES[0];

  return (
    <div className="pb-12">
      {/* ==================== HERO SECTION — NEXORANESIA STYLE ==================== */}
      <section className="relative overflow-hidden bg-[#1e110c] text-white">
        {/* Background Image with dark warm espresso gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25 transition-all duration-700 scale-105"
          style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1c0f0a] via-[#24130c]/95 to-[#2b170e]/75" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#f26722]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Copy — Exact NEXORANESIA Robotics Visual Direction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#4d2f22] bg-[#2a1811]/90 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-orange-300">
                <Sparkles className="h-3.5 w-3.5 text-[#ff732e]" />
                <span>{activeSlide.badge}</span>
              </div>

              <div className="space-y-1">
                <h1 className="font-display text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.03]">
                  <span className="block">{activeSlide.titleLine1}</span>
                  <span className="block text-white">{activeSlide.titleLine2}</span>
                </h1>
              </div>

              <p className="max-w-xl text-sm sm:text-lg leading-relaxed text-stone-200/90 font-normal">
                {activeSlide.description}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={activeSlide.ctaHref}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#f26722] px-7 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#f26722]/30 hover:bg-[#e05819] transition"
                >
                  {activeSlide.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#523426] bg-[#2a1811]/80 px-6 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-100 hover:border-[#f26722] hover:bg-[#341e15] transition"
                >
                  <FolderKanban className="h-4 w-4 text-[#ff732e]" />
                  PROJECTS ({allProjects.length})
                </Link>

                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#523426] bg-[#2a1811]/80 px-5 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-100 hover:border-[#f26722] hover:bg-[#341e15] transition"
                >
                  <Library className="h-4 w-4 text-amber-400" />
                  MODUL &amp; ARTIKEL
                </Link>
              </div>

              {/* Carousel Indicator Dots (Matching Reference) */}
              <div className="flex items-center gap-2.5 pt-4">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.titleLine2}
                    type="button"
                    onClick={() => setHeroSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      heroSlide === idx
                        ? "w-8 bg-[#f26722]"
                        : "w-2 bg-stone-600 hover:bg-stone-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Hero Showcase Card — Live Lab Metrics & Ecosystem */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[#4a2e22] bg-[#26150e]/90 p-6 sm:p-7 backdrop-blur-md shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-[#3d251b] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f26722] font-display text-lg font-black text-white shadow-md">
                      N
                    </div>
                    <div>
                      <p className="font-display text-base font-extrabold text-white">
                        NEXORANESIA TECH HUB
                      </p>
                      <p className="text-xs text-orange-300/90">
                        Tim IT &amp; Inovasi Pondok Tholabie
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-[11px] font-bold text-emerald-300">
                    Active Lab
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-stone-300">
                      Program &amp; Modul Terdokumentasi
                    </span>
                    <span className="font-display font-extrabold text-[#ff732e]">
                      {completedModules}/{totalModules} Program ({progressPct}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#180d08]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#f26722] to-amber-400 transition-all duration-500"
                      style={{ width: `${Math.max(progressPct, 8)}%` }}
                    />
                  </div>
                </div>

                {/* 4 Metric Boxes */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[#3d251b] bg-[#1e110c]/90 p-3.5">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <Layers className="h-3.5 w-3.5 text-[#ff732e]" />
                      <span className="text-[11px] font-bold">Bidang Program</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-white">
                      {totalModules}
                    </p>
                    <p className="text-[10px] text-stone-400">Modul Teknologi &amp; IT</p>
                  </div>

                  <div className="rounded-2xl border border-[#3d251b] bg-[#1e110c]/90 p-3.5">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <FolderKanban className="h-3.5 w-3.5 text-amber-400" />
                      <span className="text-[11px] font-bold">Riset &amp; Karya</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-white">
                      {allProjects.length}
                    </p>
                    <p className="text-[10px] text-stone-400">Prototipe &amp; Produk</p>
                  </div>

                  <div className="rounded-2xl border border-[#3d251b] bg-[#1e110c]/90 p-3.5">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[11px] font-bold">Panduan Praktik</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-white">
                      {totalTutorials}
                    </p>
                    <p className="text-[10px] text-stone-400">Tutorial Siap Ajar</p>
                  </div>

                  <div className="rounded-2xl border border-[#3d251b] bg-[#1e110c]/90 p-3.5">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <StickyNote className="h-3.5 w-3.5 text-sky-400" />
                      <span className="text-[11px] font-bold">Dokumentasi</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-white">
                      {totalNotes}
                    </p>
                    <p className="text-[10px] text-stone-400">Catatan &amp; Referensi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4 HIGHLIGHT PILLARS BAR (MATCHING REFERENCE SCREENSHOT 2) ==================== */}
      <section className="border-b border-stone-200/80 bg-[#f6f1eb]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f26722]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-sm font-extrabold text-slate-900">
                  Kurikulum Terpadu
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  Berbasis standar STEAM, Robotika, AI &amp; pelatihan IDN SMSIT
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-sm font-extrabold text-slate-900">
                  {allProjects.length}+ Karya Terdokumentasi
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  Riset aplikatif mulai dari robotika, 3D, WebAR, hingga AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-sm font-extrabold text-slate-900">
                  Hardware &amp; Software Lab
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  Eksplorasi nyata dengan kit robotika, sensor IoT &amp; Computer Vision
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-sm font-extrabold text-slate-900">
                  Tim IT Pondok Tholabie
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  Wadah pengembangan teknologi &amp; inovasi santri masa depan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT NEXORANESIA & TIM IT PONDOK THOLABIE ==================== */}
      <section id="about" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#f26722]">
            ABOUT NEXORANESIA • TIM IT PONDOK THOLABIE
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Pusat Pengembangan Teknologi, Robotika &amp; Inovasi Digital
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-600">
            <strong>NEXORANESIA</strong> hadir sebagai brand dan ekosistem pengembangan di bidang
            teknologi informasi (IT) milik <strong>Tim IT Pondok Tholabie</strong> — menjadi wadah
            riset, dokumentasi pelatihan, pengembangan perangkat ajar, dan inkubasi karya teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Pillar 1 */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#24130c] text-[#ff732e]">
              <Cpu className="h-5 w-5" />
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f26722]">
              01 • NEXORANESIA Tech &amp; Robotics
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Pusat Eksplorasi Coding, Robotika &amp; AI
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Mengembangkan kompetensi praktis di bidang konstruksi robotika (LEGO WeDo, Tiny:bit),
              pemodelan 3D Printing, pemrograman game (Scratch, Roblox, Canva AI), Augmented
              Reality, hingga Computer Vision &amp; IoT.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f26722] text-white">
              <Compass className="h-5 w-5" />
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#f26722]">
              02 • R&amp;D &amp; Training Documentation
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Standarisasi Modul &amp; Dokumentasi Pelatihan
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Setiap program pelatihan intensif (termasuk program <strong>IDN SMSIT</strong>)
              didokumentasikan secara sistematis oleh Tim IT menjadi modul siap ajar, panduan
              langkah kerja, dan repositori karya yang mudah dipelajari kembali.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
              03 • Tim IT Pondok Tholabie
            </p>
            <h3 className="font-display text-lg font-bold text-slate-900">
              Ekosistem Inovasi untuk Pondok Tholabie
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Dikelola oleh <strong>Tim IT Pondok Tholabie</strong> sebagai laboratorium inovasi
              untuk menghadirkan kurikulum teknologi modern, media edukasi interaktif, serta
              pemberdayaan literasi digital di lingkungan pesantren.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAMS & CURRICULUM ROADMAP ==================== */}
      <section id="training-journey" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#f26722]">
              NEXORANESIA PROGRAMS • TIM IT PONDOK THOLABIE
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
              Program Pengembangan &amp; Modul Teknologi
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Pilih salah satu dari <strong>{totalModules} bidang program teknologi</strong> di bawah
              untuk melihat dokumentasi <strong>Projects &amp; Karya</strong>,{" "}
              <strong>Catatan &amp; Cheat Sheet</strong>, serta{" "}
              <strong>Tutorial Siap Ajar</strong>.
            </p>
          </div>

          {/* Day Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDay("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedDay === "all"
                  ? "bg-[#23140d] text-white shadow-sm"
                  : "bg-white border border-stone-200 text-slate-600 hover:bg-stone-50"
              }`}
            >
              Semua Program ({totalModules})
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
                      : "bg-white border border-stone-200 text-slate-600 hover:bg-stone-50"
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
                    {dayDone} / {dayMods.length} Terdokumentasi
                  </span>
                </div>

                {/* Module Cards for this Day */}
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
                            Program #{mod.order} • {mod.category}
                          </p>
                          <h4 className="mt-0.5 font-display text-lg font-bold text-slate-900 group-hover:text-[#f26722] transition">
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

      {/* ==================== PROJECTS & RESEARCH SHOWCASE ==================== */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#f26722]">
              NEXORANESIA PROJECTS • KARYA &amp; PROTOTIPE TIM IT
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
              Katalog Karya, Produk Digital &amp; Dokumentasi Praktik
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Kumpulan hasil karya dan pengembangan di NEXORANESIA — Tim IT Pondok Tholabie: mulai
              dari robotika LEGO WeDo, 3D Printing Tinkercad (.STL), game Scratch (.sb3), WebAR,
              Computer Vision PictoBlox, MATH BATTLE Canva AI, hingga aplikasi mobile Thunkable.
            </p>
          </div>
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f26722] hover:text-[#d95311]"
          >
            Lihat Semua Projects ({allProjects.length} Karya)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((item) => {
            const accent = ACCENT_STYLES[item.module.accentColor];
            return (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
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
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-sm">
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
                    <p className="mt-1 text-xs font-semibold text-[#f26722]">{item.subtitle}</p>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-stone-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/materi/${item.module.slug}`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#f26722]"
                    >
                      Detail &amp; Panduan <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== ACTIVITIES & TEACHING HUB ==================== */}
      <section id="activities" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[#e05819]">
                <Library className="h-3.5 w-3.5" /> NEXORANESIA Academy • Open Learning Hub
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pusat Artikel, Modul Pelatihan &amp; Panduan Praktik Teknologi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>NEXORANESIA Academy</strong> menyediakan perpustakaan dokumentasi
                pembelajaran digital yang disusun oleh <strong>Tim IT Pondok Tholabie</strong> —
                berisi materi pembelajaran, tutorial praktik langkah demi langkah, panduan pembuatan
                project, dokumentasi hasil praktik, serta referensi belajar teknologi terbuka.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "AR Education & MyWebAR",
                  "3D Modeling Tinkercad",
                  "LEGO Education Robotics",
                  "Scratch Game Coding",
                  "Artificial Intelligence & PictoBlox",
                  "Canva AI & Mobile Thunkable",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#23140d] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-[#f26722] transition"
                >
                  <BookOpen className="h-4 w-4 text-[#ff732e]" />
                  Buka Artikel &amp; Modul ({totalTutorials} Panduan &amp; {totalNotes} Catatan)
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f5] p-4 space-y-1.5">
                <p className="font-display text-sm font-bold text-slate-900">Modul Pembelajaran</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Konsep dasar teknologi, fungsi perangkat, dan penjelasan antarmuka aplikasi yang
                  dikembangkan Tim IT.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f5] p-4 space-y-1.5">
                <p className="font-display text-sm font-bold text-slate-900">Tutorial Praktik</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Langkah-langkah teknis berurutan lengkap dengan tangkapan layar (screenshot) proses.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f5] p-4 space-y-1.5">
                <p className="font-display text-sm font-bold text-slate-900">Inkubasi Project</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cara merakit, mendesain, memprogram, dan mempublikasikan karya digital dari awal
                  hingga siap digunakan.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f5] p-4 space-y-1.5">
                <p className="font-display text-sm font-bold text-slate-900">Referensi &amp; Cheat Sheet</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kumpulan shortcut keyboard, checklist belajar mandiri, dan catatan evaluasi
                  praktik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TIM IT PONDOK THOLABIE & NEXORANESIA ECOSYSTEM ==================== */}
      <section id="pondok-tholabie" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#3d251b] bg-gradient-to-br from-[#1e110c] via-[#26150e] to-[#341c12] text-white shadow-xl p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f26722]/20 border border-[#f26722]/40 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-orange-300">
                  <Building2 className="h-3.5 w-3.5 text-[#ff732e]" />
                  TIM IT PONDOK THOLABIE × NEXORANESIA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-stone-200">
                  <Users className="h-3.5 w-3.5 text-amber-400" />
                  Tech &amp; Innovation Division
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                NEXORANESIA — Tempat Pengembangan Teknologi, Robotika &amp; IT Pondok Tholabie
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Website ini merupakan pusat dokumentasi, riset terapan, dan etalase inovasi milik{" "}
                <strong className="text-white">Tim IT Pondok Tholabie</strong> di bawah brand{" "}
                <strong className="text-[#ff732e]">NEXORANESIA</strong> (
                <em>Indonesia&apos;s Next Era of Innovation</em>). Seluruh modul dan proyek hasil
                pelatihan intensif <strong className="text-white">IDN SMSIT</strong> (dikontribusikan
                bersama <strong className="text-white">Daffa Zidan Mahesta</strong> &amp; rekan Tim
                IT) dikelola sebagai fondasi pengembangan kurikulum teknologi di Pondok Tholabie.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f26722] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#e05819] transition"
                >
                  <FolderKanban className="h-4 w-4" /> Katalog Karya Tim IT
                </Link>
                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
                >
                  <BookOpen className="h-4 w-4 text-amber-300" /> Pusat Modul &amp; Artikel
                </Link>
                {data.profile.github && (
                  <a
                    href={data.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-stone-100 transition"
                  >
                    <Code2 className="h-4 w-4" /> GitHub Lab
                  </a>
                )}
                {data.profile.email && (
                  <a
                    href={`mailto:${data.profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
                  >
                    <Mail className="h-4 w-4" /> Kontak Tim IT
                  </a>
                )}
              </div>
            </div>

            {/* Right: Tech Stack & Bidang Fokus Tim IT */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-black/25 border border-white/10 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-orange-300">
                    Bidang Fokus Pengembangan NEXORANESIA
                  </p>
                  <span className="text-[11px] font-bold text-stone-400">
                    {data.profile.skills.length} Bidang
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-semibold text-stone-100"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#ff732e]" />
                      {skill}
                    </span>
                  ))}
                </div>
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
