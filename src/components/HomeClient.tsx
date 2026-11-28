"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Box,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  FolderKanban,
  GraduationCap,
  Layers,
  Library,
  Mail,
  Sparkles,
  StickyNote,
  UserCheck,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import { ModuleIcon } from "@/components/ModuleIcon";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ScrollReveal } from "@/components/ScrollReveal";
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
      {/* ==================== HERO SECTION — GLASSMORPHISM PERSONAL DIGITAL LAB ==================== */}
      <section className="relative overflow-hidden border-b border-white/70 bg-gradient-to-b from-white/70 via-sky-50/40 to-transparent bg-maker-grid">
        {/* Ambient blurred glass orbs */}
        <div className="pointer-events-none absolute -top-24 -right-20 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="pointer-events-none absolute top-1/4 left-10 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {/* Row 1: Portrait (Left) & Glass Portfolio Card (Right) */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: HD Transparent Portrait with Floating Glass Pedestal & Badges */}
            {data.profile.avatar && (
              <ScrollReveal direction="right" duration={800} className="lg:col-span-5">
                <div className="relative flex items-end justify-center">
                  {/* Soft Glowing Glass Backdrop Behind Portrait */}
                  <div className="pointer-events-none absolute inset-x-6 bottom-2 top-12 rounded-[2.5rem] border border-white/80 bg-gradient-to-b from-white/60 via-sky-50/50 to-blue-100/40 backdrop-blur-xl shadow-xl shadow-blue-900/5" />

                  {/* Floating Glass Badge — Top Left */}
                  <div className="animate-float-slow pointer-events-none absolute top-6 left-2 sm:left-6 z-10 hidden sm:flex items-center gap-2 rounded-2xl border border-white/90 bg-white/75 px-3.5 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-xl">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{completedModules}/{totalModules} Materi Selesai</span>
                  </div>

                  {/* Floating Glass Badge — Bottom Right */}
                  <div className="pointer-events-none absolute bottom-6 right-2 sm:right-6 z-10 hidden sm:flex items-center gap-2 rounded-2xl border border-white/90 bg-white/80 px-3.5 py-2 text-xs font-bold text-blue-900 shadow-lg backdrop-blur-xl">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Pondok Tholabie • IDN SMSIT</span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: data.profile.avatar!,
                        caption: "Daffa Zidan Mahesta — IT Enthusiast & Digital Creator (Pondok Tholabie)",
                      })
                    }
                    className="relative z-0 group flex items-end justify-center cursor-zoom-in focus:outline-none"
                    title="Klik untuk memperbesar foto profil HD"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.profile.avatar}
                      alt={data.profile.name}
                      className="h-[340px] sm:h-[400px] lg:h-[430px] w-auto object-contain object-bottom drop-shadow-[0_16px_28px_rgba(15,23,42,0.16)] group-hover:scale-[1.02] transition duration-300"
                    />
                  </button>
                </div>
              </ScrollReveal>
            )}

            {/* Right: Frosted Glass Hero Card */}
            <ScrollReveal
              direction="left"
              delay={120}
              duration={800}
              className={data.profile.avatar ? "lg:col-span-7" : "lg:col-span-12"}
            >
              <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-blue-200/80 bg-white/80 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-900 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  <span>PERSONAL PORTFOLIO &amp; LEARNING DOCUMENTATION</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-sky-700">PERSONAL DIGITAL LAB</span>
                </div>

                <div>
                  <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
                    Learning Technology,{" "}
                    <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-sky-600 bg-clip-text text-transparent">
                      Creating Possibilities.
                    </span>
                  </h1>
                  <p className="mt-1.5 font-display text-xs sm:text-sm font-bold text-blue-800">
                    Belajar Teknologi. Menciptakan Karya. Berbagi Pengetahuan.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  <p>
                    Halo, saya <strong className="text-slate-900">Daffa Zidan Mahesta</strong> —{" "}
                    <strong className="text-slate-800">IT Enthusiast &amp; Digital Creator</strong> dari{" "}
                    <strong className="text-blue-900">Pondok Tholabie</strong>.{" "}
                    <strong className="text-slate-900">Personal Digital Lab</strong> adalah ruang
                    dokumentasi belajar, hasil pelatihan <strong className="text-slate-900">IDN SMSIT</strong>,
                    eksplorasi teknologi, dan portofolio karya digital saya.
                  </p>
                  <p>
                    Melalui website ini, saya mendokumentasikan proses belajar, membagikan pengetahuan,
                    dan mengembangkan keterampilan teknologi agar bermanfaat bagi lingkungan sekitar,
                    khususnya <strong className="text-slate-900">Pondok Tholabie</strong>.
                  </p>
                </div>

                <div className="inline-block rounded-xl bg-slate-900/95 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-sky-300 shadow-sm">
                  FROM LEARNING TO CREATING, FROM CREATING TO SHARING.
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href="#training-journey"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-slate-900 via-blue-950 to-blue-900 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-950/20 hover:opacity-95 transition"
                  >
                    Training Journey ({completedModules}/{totalModules})
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href="/portofolio"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/90 bg-white/80 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md hover:border-blue-400 hover:bg-white transition"
                  >
                    <FolderKanban className="h-3.5 w-3.5 text-blue-700" />
                    My Projects ({allProjects.length})
                  </Link>
                  <Link
                    href="/tutorial"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/90 bg-white/80 px-4 py-2.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md hover:border-sky-400 hover:bg-white transition"
                  >
                    <Library className="h-3.5 w-3.5 text-sky-700" />
                    Teaching &amp; Learning Hub
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: Full-Width Frosted Glass Documentation Summary Bar */}
          <ScrollReveal direction="up" delay={200} className="mt-7">
            <div className="glass-panel rounded-3xl p-5">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                        IDN SMSIT • Training Journey Progress
                      </p>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {completedModules} dari {totalModules} topik materi terdokumentasi
                      </p>
                    </div>
                    <span className="inline-flex h-9 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 font-display text-xs font-extrabold text-blue-800 border border-blue-200/80">
                      {progressPct}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-slate-900 via-blue-700 to-sky-500 transition-all duration-500"
                      style={{ width: `${Math.max(progressPct, 6)}%` }}
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-2xl bg-white/75 border border-white/90 p-3.5 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Layers className="h-3.5 w-3.5 text-blue-700" />
                      <span className="text-[11px] font-bold">Topik Materi</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalModules}
                    </p>
                    <p className="text-[10px] text-slate-500">Pelatihan IDN SMSIT</p>
                  </div>

                  <div className="rounded-2xl bg-white/75 border border-white/90 p-3.5 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <FolderKanban className="h-3.5 w-3.5 text-sky-600" />
                      <span className="text-[11px] font-bold">My Projects</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {allProjects.length}
                    </p>
                    <p className="text-[10px] text-slate-500">Karya &amp; dokumentasi</p>
                  </div>

                  <div className="rounded-2xl bg-white/75 border border-white/90 p-3.5 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <GraduationCap className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-[11px] font-bold">Panduan Praktik</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalTutorials}
                    </p>
                    <p className="text-[10px] text-slate-500">Tutorial langkah kerja</p>
                  </div>

                  <div className="rounded-2xl bg-white/75 border border-white/90 p-3.5 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <StickyNote className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-[11px] font-bold">Catatan Belajar</span>
                    </div>
                    <p className="mt-1 font-display text-2xl font-extrabold text-slate-900">
                      {totalNotes}
                    </p>
                    <p className="text-[10px] text-slate-500">Learning resources</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== ABOUT ME & 3 IDENTITAS UTAMA WEBSITE ==================== */}
      <section id="about" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
              About Me &amp; Core Identity
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Tiga Pilar Utama Personal Digital Lab
            </h2>
            <p className="max-w-3xl text-sm sm:text-base text-slate-600">
              Website ini dirancang sebagai ruang personal portfolio, dokumentasi perjalanan pelatihan
              di <strong>IDN SMSIT</strong>, serta jembatan berbagi pengetahuan untuk pengembangan
              pembelajaran teknologi di <strong>Pondok Tholabie</strong>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Pillar 1: Personal Identity */}
          <ScrollReveal direction="up" delay={0}>
            <div className="glass-card h-full rounded-3xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 shadow-md">
                <UserCheck className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                01 • Personal Identity
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Daffa Zidan Mahesta — IT Enthusiast &amp; Digital Creator
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Memperkenalkan perjalanan saya sebagai pembelajar teknologi dan pengembang karya
                digital yang aktif mengeksplorasi robotika, desain 3D, pemrograman game, Augmented
                Reality, AI, hingga pengembangan media pembelajaran interaktif.
              </p>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Training Journey */}
          <ScrollReveal direction="up" delay={120}>
            <div className="glass-card h-full rounded-3xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md">
                <Compass className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                02 • Training Journey
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Dokumentasi Pelatihan Intensif IDN SMSIT
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Mendokumentasikan setiap proses belajar, eksperimen teknis, catatan materi, tutorial
                langkah demi langkah, dan hasil karya praktik selama mengikuti program pelatihan di{" "}
                <strong>IDN SMSIT</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Pillar 3: Institutional Affiliation */}
          <ScrollReveal direction="up" delay={240}>
            <div className="glass-card h-full rounded-3xl p-6 space-y-3 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md">
                <Building2 className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700">
                03 • Institutional Affiliation
              </p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Dedikasi &amp; Pengembangan untuk Pondok Tholabie
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Menunjukkan identitas saya sebagai bagian dari <strong>Pondok Tholabie</strong> dengan
                tujuan mengadaptasi dan menerapkan ilmu teknologi yang diperoleh agar bermanfaat bagi
                pendidikan dan kegiatan lingkungan pesantren.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== TRAINING JOURNEY — IDN SMSIT ==================== */}
      <section id="training-journey" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                Training Journey • IDN SMSIT
              </p>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
                Dokumentasi Perjalanan Pelatihan 4 Hari
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Pilih salah satu dari <strong>{totalModules} topik materi pelatihan</strong> di bawah untuk melihat
                dokumentasi <strong>My Projects</strong>, <strong>Learning Resources (Catatan)</strong>,
                serta <strong>Panduan Praktik (Tutorial)</strong>.
              </p>
            </div>

            {/* Day Filter Glass Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDay("all")}
                className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  selectedDay === "all"
                    ? "bg-slate-900 text-white shadow-md"
                    : "glass-pill text-slate-600 hover:bg-white"
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
                        ? `${accent.badgeSolid} shadow-md`
                        : "glass-pill text-slate-600 hover:bg-white"
                    }`}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Days Grid with Staggered Scroll Reveal */}
        <div className="space-y-8">
          {visibleDays.map((dayInfo) => {
            const accent = ACCENT_STYLES[dayInfo.accentColor];
            const dayMods = data.modules.filter((m) => m.day === dayInfo.day);
            const dayDone = dayMods.filter((m) => m.status === "completed").length;

            return (
              <ScrollReveal key={dayInfo.day} direction="up">
                <div className="glass-panel rounded-3xl p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200/60">
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
                    {dayMods.map((mod, idx) => {
                      const status = STATUS_META[mod.status];
                      const coverImg = mod.projects[0]?.image;

                      return (
                        <ScrollReveal key={mod.slug} direction="up" delay={idx * 100}>
                          <Link
                            href={`/materi/${mod.slug}`}
                            className={`glass-card group flex h-full flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1.5 ${accent.borderHover}`}
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
                                <div className="mb-3 h-36 w-full overflow-hidden rounded-xl border border-white/80 bg-white/80 shadow-inner">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={coverImg}
                                    alt={mod.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                  />
                                </div>
                              )}

                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Topik #{mod.order} • {mod.category}
                              </p>
                              <h4 className="mt-0.5 font-display text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                                {mod.title}
                              </h4>
                              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
                                {mod.tagline}
                              </p>
                            </div>

                            {/* Footer Counters */}
                            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
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
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ==================== MY PROJECTS SHOWCASE ==================== */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                My Projects • Karya Praktik &amp; Eksplorasi
              </p>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
                Dokumentasi Karya &amp; Project Pelatihan
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Kumpulan hasil karya selama mengikuti pelatihan di IDN SMSIT: mulai dari konstruksi
                LEGO Education WeDo, pemodelan 3D Tinkercad (.STL), game Scratch (.sb3), WebAR,
                AI PictoBlox, MATH BATTLE Canva AI, hingga aplikasi mobile Thunkable.
              </p>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800"
            >
              Lihat Semua My Projects ({allProjects.length} Karya)
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((item, idx) => {
            const accent = ACCENT_STYLES[item.module.accentColor];
            return (
              <ScrollReveal key={item.id} direction="up" delay={(idx % 3) * 110}>
                <div className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5">
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
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${accent.badgeSolid}`}
                      >
                        Hari {item.module.day} • {item.module.shortTitle}
                      </span>
                      {item.stlUrl && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-bold text-sky-300 backdrop-blur-sm">
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
                      <p className="mt-1 text-xs font-semibold text-blue-700">{item.subtitle}</p>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="rounded-lg bg-white/80 border border-slate-200/70 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/materi/${item.module.slug}`}
                        className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-700"
                      >
                        Detail &amp; Panduan <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ==================== TEACHING & LEARNING HUB + LEARNING RESOURCES ==================== */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-panel rounded-3xl p-7 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/80 px-3.5 py-1 text-xs font-bold text-blue-800 backdrop-blur-sm">
                  <Library className="h-3.5 w-3.5" /> Teaching &amp; Learning Hub • Open Learning Resources
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Perpustakaan Materi &amp; Panduan Praktik Teknologi Terbuka
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>Teaching &amp; Learning Hub</strong> adalah perpustakaan dokumentasi
                  pembelajaran digital yang dapat dibaca dan dipelajari siapa saja secara terbuka —
                  berisi materi pembelajaran, tutorial praktik langkah demi langkah, panduan pembuatan
                  project, dokumentasi hasil praktik, serta referensi belajar teknologi.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "AR Education & MyWebAR",
                    "3D Modeling Tinkercad",
                    "LEGO Education Robotics",
                    "Scratch Game Coding",
                    "Artificial Intelligence",
                    "Canva AI & Mobile App",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="rounded-xl border border-white/90 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href="/tutorial"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-950 transition"
                  >
                    <BookOpen className="h-4 w-4 text-sky-300" />
                    Buka Teaching &amp; Learning Hub ({totalTutorials} Panduan &amp; {totalNotes} Catatan)
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="rounded-2xl border border-white/90 bg-white/75 p-4 space-y-1.5 shadow-sm backdrop-blur-md">
                  <p className="font-display text-sm font-bold text-slate-900">Materi Pembelajaran</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Konsep dasar teknologi, fungsi perangkat, dan penjelasan antarmuka aplikasi yang
                    dipelajari.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/90 bg-white/75 p-4 space-y-1.5 shadow-sm backdrop-blur-md">
                  <p className="font-display text-sm font-bold text-slate-900">Tutorial Praktik</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Langkah-langkah teknis berurutan lengkap dengan tangkapan layar (screenshot) proses.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/90 bg-white/75 p-4 space-y-1.5 shadow-sm backdrop-blur-md">
                  <p className="font-display text-sm font-bold text-slate-900">Panduan Project</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cara merakit, mendesain, memprogram, dan mempublikasikan karya digital dari awal
                    hingga selesai.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/90 bg-white/75 p-4 space-y-1.5 shadow-sm backdrop-blur-md">
                  <p className="font-display text-sm font-bold text-slate-900">Referensi Belajar</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kumpulan shortcut keyboard, checklist belajar mandiri, dan catatan evaluasi
                    praktik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ==================== PONDOK THOLABIE & PERSONAL PROFILE ==================== */}
      <section id="pondok-tholabie" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-2xl">
            {/* Ambient glass glow inside dark card */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-end">
              {/* Full Transparent HD Portrait Cutout */}
              {data.profile.avatar && (
                <div className="lg:col-span-5 flex items-end justify-center px-6 pt-8 lg:pt-6 lg:pb-0">
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: data.profile.avatar!,
                        caption: `${data.profile.name} — ${data.profile.role}`,
                      })
                    }
                    className="group flex items-end justify-center cursor-zoom-in focus:outline-none"
                    title="Perbesar foto profil"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.profile.avatar}
                      alt={data.profile.name}
                      className="h-[360px] sm:h-[420px] lg:h-[460px] w-auto object-contain object-bottom drop-shadow-[0_16px_26px_rgba(0,0,0,0.45)] group-hover:scale-[1.015] transition duration-300"
                    />
                  </button>
                </div>
              )}

              {/* Profile Info, Pondok Tholabie Vision & Skills */}
              <div
                className={`${
                  data.profile.avatar ? "lg:col-span-7 lg:pl-2" : "lg:col-span-12"
                } p-7 sm:p-10 space-y-6`}
              >
                <div className="space-y-3.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300 backdrop-blur-md">
                    <Building2 className="h-3.5 w-3.5" /> Pondok Tholabie • Institutional Affiliation
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                    {data.profile.name} — Pengenalan &amp; Pengembangan Teknologi di Pondok Tholabie
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    Sebagai bagian dari <strong className="text-white">Pondok Tholabie</strong>, seluruh
                    dokumentasi hasil pelatihan di <strong className="text-white">IDN SMSIT</strong> di
                    dalam <em>Personal Digital Lab</em> ini disusun sebagai referensi awal untuk
                    mengembangkan kegiatan pembelajaran teknologi, literasi digital, robotika, pemodelan
                    3D, dan media edukasi interaktif di lingkungan pesantren.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {data.profile.github && (
                      <a
                        href={data.profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-sky-50 transition"
                      >
                        <Code2 className="h-4 w-4" /> GitHub ({data.profile.displayName})
                      </a>
                    )}
                    {data.profile.email && (
                      <a
                        href={`mailto:${data.profile.email}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md hover:bg-white/20 transition"
                      >
                        <Mail className="h-4 w-4" /> {data.profile.email}
                      </a>
                    )}
                    <Link
                      href="/tutorial"
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-sky-400 transition"
                    >
                      <BookOpen className="h-4 w-4" /> Teaching &amp; Learning Hub
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-5 space-y-3 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Kompetensi &amp; Eksplorasi Teknologi (IDN SMSIT)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 backdrop-blur-sm"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ImageLightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
