"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Keyboard,
  Lightbulb,
  Pencil,
  StickyNote,
  Wrench,
  ZoomIn,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import { ModuleIcon } from "@/components/ModuleIcon";
import { StlViewer } from "@/components/StlViewer";
import { ImageLightbox } from "@/components/ImageLightbox";
import { MathBattleShowcase } from "@/components/MathBattleShowcase";

type TabKey = "projects" | "notes" | "tutorials";

export function ModuleDetailClient({ slug }: { slug: string }) {
  const { data } = usePortfolio();
  const [activeTab, setActiveTab] = useState<TabKey>("projects");
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);

  const modIndex = data.modules.findIndex((m) => m.slug === slug);
  const mod = data.modules[modIndex];

  if (!mod) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          Materi tidak ditemukan
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const accent = ACCENT_STYLES[mod.accentColor];
  const status = STATUS_META[mod.status];
  const dayMeta = DAYS_META.find((d) => d.day === mod.day)!;
  const prevMod = modIndex > 0 ? data.modules[modIndex - 1] : null;
  const nextMod = modIndex < data.modules.length - 1 ? data.modules[modIndex + 1] : null;

  return (
    <div className="pb-16">
      {/* ==================== MODULE HERO HEADER ==================== */}
      <section className={`bg-gradient-to-br ${accent.gradient} text-white`}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
              <span>/</span>
              <span>{dayMeta.label}</span>
              <span>/</span>
              <span className="text-white">{mod.shortTitle}</span>
            </div>

            <Link
              href={`/admin?module=${mod.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-sm hover:bg-white/25 transition"
            >
              <Pencil className="h-3.5 w-3.5" />
              Kelola / Tambah Konten
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm">
                  {dayMeta.label} • Modul #{mod.order}
                </span>
                <span className="rounded-full bg-slate-950/25 px-3 py-1 text-xs font-bold">
                  {mod.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900">
                  <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                  {status.label}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/25">
                  <ModuleIcon name={mod.iconName} className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
                    {mod.title}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
                    {mod.summary}
                  </p>
                </div>
              </div>

              {/* Tools Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white/80">
                  <Wrench className="h-3.5 w-3.5" /> Tools:
                </span>
                {mod.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg bg-white/15 border border-white/20 px-2.5 py-1 text-xs font-semibold text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning Goals Box */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-950/25 border border-white/15 p-5 backdrop-blur-sm space-y-2.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/85">
                Target Capaian Belajar
              </p>
              <ul className="space-y-2">
                {mod.learningGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/90 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3 INTERACTIVE TABS ==================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-6 mb-8 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/5">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition cursor-pointer ${
              activeTab === "projects"
                ? `${accent.badgeSolid} shadow-sm`
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <FolderKanban className="h-4 w-4" />
            Project & Karya
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === "projects" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {mod.projects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition cursor-pointer ${
              activeTab === "notes"
                ? `${accent.badgeSolid} shadow-sm`
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <StickyNote className="h-4 w-4" />
            Catatan & Cheat Sheet
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === "notes" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {mod.notes.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("tutorials")}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition cursor-pointer ${
              activeTab === "tutorials"
                ? `${accent.badgeSolid} shadow-sm`
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Tutorial Siap Ajar
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                activeTab === "tutorials" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {mod.tutorials.length}
            </span>
          </button>
        </div>

        {/* ==================== TAB 1: PROJECTS ==================== */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            {mod.slug === "design-canva" && (
              <MathBattleShowcase
                onOpenImage={(src, caption) => setLightbox({ src, caption })}
              />
            )}
            {mod.projects.length === 0 ? (
              <EmptyModuleBox
                moduleSlug={mod.slug}
                title="Belum ada project di materi ini"
                description={`Materi ${mod.title} dijadwalkan pada ${dayMeta.label}. Setelah praktik selesai, kamu bisa langsung menambahkan foto hasil karya, link demo, atau file project dari Dashboard Admin.`}
              />
            ) : (
              mod.projects.map((proj) => (
                <article
                  key={proj.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Image */}
                    <div
                      className="relative lg:col-span-5 bg-slate-100 min-h-[260px] cursor-zoom-in group"
                      onClick={() =>
                        setLightbox({ src: proj.image, caption: `${proj.title} — ${proj.subtitle}` })
                      }
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-300"
                      />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-xl bg-slate-900/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        <ZoomIn className="h-3.5 w-3.5" /> Perbesar
                      </span>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${accent.badge}`}>
                            {proj.date}
                          </span>
                          {proj.stlUrl && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-emerald-300">
                              <Box className="h-3.5 w-3.5" /> Tersedia Preview 3D Interaktif
                            </span>
                          )}
                        </div>

                        <h2 className="font-display text-2xl font-extrabold text-slate-900">
                          {proj.title}
                        </h2>
                        <p className={`text-sm font-bold ${accent.text}`}>{proj.subtitle}</p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                        {proj.downloadUrl && (
                          <a
                            href={proj.downloadUrl}
                            download
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold shadow-sm transition hover:opacity-95 ${accent.badgeSolid}`}
                          >
                            <Download className="h-4 w-4" />
                            {proj.downloadLabel || "Download File Project"}
                          </a>
                        )}
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Buka Demo / Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Interactive 3D STL Viewer if available */}
                  {proj.stlUrl && (
                    <div className="border-t border-slate-100 p-5 sm:p-6 bg-slate-50/70">
                      <StlViewer url={proj.stlUrl} title={proj.title} />
                    </div>
                  )}

                  {/* Gallery Thumbnails if available */}
                  {proj.gallery && proj.gallery.length > 0 && (
                    <div className="border-t border-slate-100 bg-slate-50/60 p-5 sm:p-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Dokumentasi & Screenshot Proses ({proj.gallery.length})
                      </p>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {proj.gallery.map((g, i) => (
                          <button
                            key={i}
                            onClick={() => setLightbox({ src: g.src, caption: g.caption })}
                            className="group text-left overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-emerald-400 transition cursor-zoom-in"
                          >
                            <div className="h-40 w-full overflow-hidden bg-slate-100">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={g.src}
                                alt={g.caption}
                                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                              />
                            </div>
                            <p className="p-3 text-xs text-slate-600 leading-snug">{g.caption}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        )}

        {/* ==================== TAB 2: NOTES & CHEAT SHEET ==================== */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            {mod.notes.length === 0 ? (
              <EmptyModuleBox
                moduleSlug={mod.slug}
                title="Belum ada catatan untuk materi ini"
                description="Catat poin penting, shortcut keyboard, kendala + solusinya, atau rangkuman materi saat pelatihan berlangsung lewat Dashboard Admin."
              />
            ) : (
              mod.notes.map((note) => (
                <article
                  key={note.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold ${accent.badge}`}>
                        {note.category}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900">
                        {note.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">{note.summary}</p>
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      Diperbarui: {note.updatedAt}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-slate-700">
                    {note.content}
                  </div>

                  {/* Keyboard Shortcuts Visual Grid */}
                  {note.shortcuts && note.shortcuts.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <Keyboard className={`h-4 w-4 ${accent.text}`} />
                        Daftar Shortcut Penting
                      </div>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {note.shortcuts.map((sc, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                          >
                            <kbd className="shrink-0 rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs font-bold text-slate-900 shadow-sm">
                              {sc.keys}
                            </kbd>
                            <div>
                              <p className="text-sm font-bold text-slate-900">{sc.action}</p>
                              {sc.detail && (
                                <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                                  {sc.detail}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tips Box */}
                  {note.tips && note.tips.length > 0 && (
                    <div className={`rounded-2xl border ${accent.border} ${accent.bgSoft} p-5 space-y-2.5`}>
                      <div className={`flex items-center gap-2 text-sm font-bold ${accent.text}`}>
                        <Lightbulb className="h-4 w-4" />
                        Tips Praktik & Mengajar
                      </div>
                      <ul className="space-y-2">
                        {note.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        )}

        {/* ==================== TAB 3: STEP-BY-STEP TUTORIALS ==================== */}
        {activeTab === "tutorials" && (
          <div className="space-y-8">
            {mod.tutorials.length === 0 ? (
              <EmptyModuleBox
                moduleSlug={mod.slug}
                title="Belum ada tutorial langkah demi langkah"
                description="Buat panduan step-by-step lengkap dengan gambar screenshot dan blok kode supaya materi ini siap diajarkan kembali ke siswa di sekolah!"
              />
            ) : (
              mod.tutorials.map((tut) => (
                <article
                  key={tut.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6"
                >
                  {/* Tutorial Header */}
                  <div className="border-b border-slate-100 pb-5 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${accent.badgeSolid}`}>
                        Level: {tut.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                        <Clock className="h-3.5 w-3.5" /> {tut.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                        <BookOpen className="h-3.5 w-3.5" /> {tut.steps.length} Langkah
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-extrabold text-slate-900">
                      {tut.title}
                    </h2>
                    <p className="text-sm text-slate-600">{tut.subtitle}</p>

                    <div className={`rounded-2xl border ${accent.border} ${accent.bgSoft} p-4 text-sm text-slate-700`}>
                      <strong className={accent.text}>Tujuan Belajar: </strong>
                      {tut.goal}
                    </div>

                    {tut.tools && tut.tools.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                          <Wrench className="h-3.5 w-3.5" /> Persiapan Perangkat:
                        </span>
                        {tut.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Numbered Steps */}
                  <div className="space-y-6">
                    {tut.steps.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-6 space-y-4"
                      >
                        <div className="flex items-start gap-3.5">
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold shadow-sm ${accent.iconBg}`}
                          >
                            {step.stepNumber}
                          </span>
                          <div className="space-y-1.5 flex-1">
                            <h3 className="font-display text-lg font-bold text-slate-900">
                              {step.title}
                            </h3>
                            <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-slate-700">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {step.image && (
                          <div
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white max-w-2xl cursor-zoom-in group"
                            onClick={() =>
                              setLightbox({
                                src: step.image!,
                                caption: `Langkah ${step.stepNumber}: ${step.title}`,
                              })
                            }
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full max-h-96 object-contain bg-slate-50 group-hover:scale-[1.01] transition"
                            />
                          </div>
                        )}

                        {step.codeSnippet && (
                          <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-4 font-mono text-xs sm:text-sm text-emerald-300 leading-relaxed">
                            <code>{step.codeSnippet}</code>
                          </pre>
                        )}

                        {step.tip && (
                          <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs sm:text-sm text-amber-900">
                            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                            <span>
                              <strong>Tips: </strong>
                              {step.tip}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {tut.downloadUrl && (
                    <div className="pt-2">
                      <a
                        href={tut.downloadUrl}
                        download
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold shadow-sm transition hover:opacity-95 ${accent.badgeSolid}`}
                      >
                        <Download className="h-4 w-4" />
                        {tut.downloadLabel || "Download File Project Tutorial"}
                      </a>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        )}

        {/* ==================== PREV / NEXT MODULE STEPPER ==================== */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-slate-200 pt-8">
          {prevMod ? (
            <Link
              href={`/materi/${prevMod.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-emerald-400 hover:shadow-md transition"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition">
                <ArrowLeft className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Materi Sebelumnya • Hari {prevMod.day}
                </p>
                <p className="font-display text-sm font-bold text-slate-900 truncate">
                  {prevMod.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextMod ? (
            <Link
              href={`/materi/${nextMod.slug}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right hover:border-emerald-400 hover:shadow-md transition"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Materi Berikutnya • Hari {nextMod.day}
                </p>
                <p className="font-display text-sm font-bold text-slate-900 truncate">
                  {nextMod.title}
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <ImageLightbox
        src={lightbox?.src ?? null}
        caption={lightbox?.caption}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

function EmptyModuleBox({
  moduleSlug,
  title,
  description,
}: {
  moduleSlug: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white/80 p-10 text-center space-y-4">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
        <BookOpen className="h-7 w-7" />
      </div>
      <div className="space-y-1.5 max-w-lg mx-auto">
        <h3 className="font-display text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <Link
        href={`/admin?module=${moduleSlug}`}
        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition"
      >
        <Pencil className="h-4 w-4" />
        Tambah Konten di Dashboard Admin
      </Link>
    </div>
  );
}
