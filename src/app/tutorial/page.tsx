"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Keyboard,
  Search,
  StickyNote,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES } from "@/lib/theme";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function TutorialNotesPage() {
  const { data } = usePortfolio();
  const [tab, setTab] = useState<"all" | "tutorials" | "notes">("all");
  const [query, setQuery] = useState("");

  const allTutorials = useMemo(
    () =>
      data.modules.flatMap((mod) =>
        mod.tutorials.map((t) => ({ ...t, module: mod }))
      ),
    [data.modules]
  );

  const allNotes = useMemo(
    () =>
      data.modules.flatMap((mod) =>
        mod.notes.map((n) => ({ ...n, module: mod }))
      ),
    [data.modules]
  );

  const q = query.trim().toLowerCase();

  const filteredTutorials = useMemo(() => {
    if (!q) return allTutorials;
    return allTutorials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.goal.toLowerCase().includes(q) ||
        t.module.title.toLowerCase().includes(q) ||
        t.steps.some(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q)
        )
    );
  }, [allTutorials, q]);

  const filteredNotes = useMemo(() => {
    if (!q) return allNotes;
    return allNotes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        n.module.title.toLowerCase().includes(q) ||
        (n.shortcuts || []).some(
          (sc) =>
            sc.keys.toLowerCase().includes(q) ||
            sc.action.toLowerCase().includes(q)
        )
    );
  }, [allNotes, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Header & Search */}
      <ScrollReveal direction="up">
        <div className="glass-panel rounded-3xl p-7 sm:p-9 space-y-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/90 border border-blue-200/80 px-3 py-1 text-xs font-bold text-blue-900">
                <BookOpen className="h-3.5 w-3.5" /> Teaching &amp; Learning Hub • Learning Resources
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                Teaching &amp; Learning Hub
              </h1>
              <p className="text-sm sm:text-base text-slate-600">
                Perpustakaan materi pembelajaran digital terbuka di{" "}
                <strong>Personal Digital Lab</strong> — berisi materi pembelajaran, tutorial praktik,
                panduan pembuatan project, dokumentasi hasil praktik, dan referensi belajar teknologi
                yang dapat dibaca siapa saja.
              </p>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari tutorial, catatan, shortcut..."
                className="w-full rounded-2xl border border-white/90 bg-white/80 py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm backdrop-blur-md focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-slate-200/60 pt-5">
            <button
              onClick={() => setTab("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                tab === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "glass-pill text-slate-600 hover:bg-white"
              }`}
            >
              Semua ({filteredTutorials.length + filteredNotes.length})
            </button>
            <button
              onClick={() => setTab("tutorials")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                tab === "tutorials"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "glass-pill text-slate-600 hover:bg-white"
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" /> Tutorial Siap Ajar ({filteredTutorials.length})
            </button>
            <button
              onClick={() => setTab("notes")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                tab === "notes"
                  ? "bg-amber-500 text-white shadow-sm"
                  : "glass-pill text-slate-600 hover:bg-white"
              }`}
            >
              <StickyNote className="h-3.5 w-3.5" /> Catatan &amp; Shortcut ({filteredNotes.length})
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Tutorials Section */}
      {(tab === "all" || tab === "tutorials") && (
        <section className="space-y-4">
          <ScrollReveal direction="up">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
              Tutorial Step-by-Step ({filteredTutorials.length})
            </h2>
          </ScrollReveal>

          {filteredTutorials.length === 0 ? (
            <p className="glass-panel rounded-2xl p-6 text-sm text-slate-500">
              Tidak ada tutorial yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredTutorials.map((tut, idx) => {
                const accent = ACCENT_STYLES[tut.module.accentColor];
                return (
                  <ScrollReveal key={tut.id} direction="up" delay={(idx % 2) * 100}>
                    <Link
                      href={`/materi/${tut.module.slug}`}
                      className="glass-card group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent.badgeSolid}`}>
                            Hari {tut.module.day} • {tut.module.shortTitle}
                          </span>
                          <span className="rounded-full bg-white/85 border border-slate-200/70 px-2.5 py-0.5 text-[11px] font-bold text-slate-700">
                            {tut.difficulty}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                            <Clock className="h-3.5 w-3.5" /> {tut.duration}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                          {tut.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{tut.goal}</p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs font-bold">
                        <span className="text-slate-500">{tut.steps.length} Langkah Praktik</span>
                        <span className="inline-flex items-center gap-1 text-blue-700">
                          Baca Tutorial Lengkap <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Notes Section */}
      {(tab === "all" || tab === "notes") && (
        <section className="space-y-4">
          <ScrollReveal direction="up">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <StickyNote className="h-6 w-6 text-amber-500" />
              Catatan &amp; Cheat Sheet ({filteredNotes.length})
            </h2>
          </ScrollReveal>

          {filteredNotes.length === 0 ? (
            <p className="glass-panel rounded-2xl p-6 text-sm text-slate-500">
              Tidak ada catatan yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredNotes.map((note, idx) => {
                const accent = ACCENT_STYLES[note.module.accentColor];
                return (
                  <ScrollReveal key={note.id} direction="up" delay={(idx % 2) * 100}>
                    <Link
                      href={`/materi/${note.module.slug}`}
                      className="glass-card group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent.badgeSolid}`}>
                            Hari {note.module.day} • {note.module.shortTitle}
                          </span>
                          <span className="rounded-full bg-amber-100/90 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                            {note.category}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
                          {note.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{note.summary}</p>

                        {note.shortcuts && note.shortcuts.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <Keyboard className="h-3.5 w-3.5 text-slate-400" />
                            {note.shortcuts.map((sc, i) => (
                              <kbd
                                key={i}
                                className="rounded-lg border border-slate-200 bg-white/80 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700"
                              >
                                {sc.keys}
                              </kbd>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs font-bold">
                        <span className="text-slate-400">Update: {note.updatedAt}</span>
                        <span className="inline-flex items-center gap-1 text-blue-700">
                          Buka Catatan <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
