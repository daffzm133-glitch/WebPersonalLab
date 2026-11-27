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
      <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#d95311]">
              <BookOpen className="h-3.5 w-3.5" /> NEXORANESIA Academy • Tim IT Pondok Tholabie
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Pusat Artikel, Modul &amp; Panduan Teknologi
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Perpustakaan materi pembelajaran dan pengembangan teknologi terbuka yang dikelola oleh{" "}
              <strong>NEXORANESIA — Tim IT Pondok Tholabie</strong> — berisi modul pembelajaran,
              tutorial praktik langkah demi langkah, panduan pembuatan project, dokumentasi hasil
              praktik, dan referensi belajar teknologi.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari tutorial, catatan, shortcut..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 focus:border-violet-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
          <button
            onClick={() => setTab("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === "all"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Semua ({filteredTutorials.length + filteredNotes.length})
          </button>
          <button
            onClick={() => setTab("tutorials")}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === "tutorials"
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" /> Tutorial Siap Ajar ({filteredTutorials.length})
          </button>
          <button
            onClick={() => setTab("notes")}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
              tab === "notes"
                ? "bg-amber-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <StickyNote className="h-3.5 w-3.5" /> Catatan & Shortcut ({filteredNotes.length})
          </button>
        </div>
      </div>

      {/* Tutorials Section */}
      {(tab === "all" || tab === "tutorials") && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-emerald-600" />
            Tutorial Step-by-Step ({filteredTutorials.length})
          </h2>

          {filteredTutorials.length === 0 ? (
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
              Tidak ada tutorial yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredTutorials.map((tut) => {
                const accent = ACCENT_STYLES[tut.module.accentColor];
                return (
                  <Link
                    key={tut.id}
                    href={`/materi/${tut.module.slug}`}
                    className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-400 hover:shadow-lg transition"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent.badgeSolid}`}>
                          Hari {tut.module.day} • {tut.module.shortTitle}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-700">
                          {tut.difficulty}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                          <Clock className="h-3.5 w-3.5" /> {tut.duration}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                        {tut.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{tut.goal}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold">
                      <span className="text-slate-500">{tut.steps.length} Langkah Praktik</span>
                      <span className="inline-flex items-center gap-1 text-emerald-700">
                        Baca Tutorial Lengkap <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Notes Section */}
      {(tab === "all" || tab === "notes") && (
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <StickyNote className="h-6 w-6 text-amber-500" />
            Catatan & Cheat Sheet ({filteredNotes.length})
          </h2>

          {filteredNotes.length === 0 ? (
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
              Tidak ada catatan yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredNotes.map((note) => {
                const accent = ACCENT_STYLES[note.module.accentColor];
                return (
                  <Link
                    key={note.id}
                    href={`/materi/${note.module.slug}`}
                    className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-amber-400 hover:shadow-lg transition"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent.badgeSolid}`}>
                          Hari {note.module.day} • {note.module.shortTitle}
                        </span>
                        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                          {note.category}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-amber-700 transition">
                        {note.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{note.summary}</p>

                      {note.shortcuts && note.shortcuts.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <Keyboard className="h-3.5 w-3.5 text-slate-400" />
                          {note.shortcuts.map((sc, i) => (
                            <kbd
                              key={i}
                              className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-700"
                            >
                              {sc.keys}
                            </kbd>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold">
                      <span className="text-slate-400">Update: {note.updatedAt}</span>
                      <span className="inline-flex items-center gap-1 text-amber-700">
                        Buka Catatan <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
