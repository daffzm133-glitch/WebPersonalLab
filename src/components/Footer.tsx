"use client";

import Link from "next/link";
import { Code2, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { DAYS_META } from "@/lib/theme";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Footer() {
  const { data } = usePortfolio();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-300">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 text-white shadow-md shadow-sky-500/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {data.profile.siteTitle}
                  </p>
                  <p className="text-xs text-slate-400">
                    {data.profile.name} • Pondok Tholabie
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Learning Technology, Creating Possibilities.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {data.profile.mission}
              </p>
              <div className="flex items-center gap-3 pt-1">
                {data.profile.github && (
                  <a
                    href={data.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/20 transition"
                  >
                    <Code2 className="h-4 w-4" /> GitHub
                  </a>
                )}
                {data.profile.email && (
                  <a
                    href={`mailto:${data.profile.email}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/20 transition"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                )}
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {DAYS_META.map((dayInfo) => {
                const mods = data.modules.filter((m) => m.day === dayInfo.day);
                return (
                  <div key={dayInfo.day} className="space-y-2.5">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {dayInfo.label}
                    </p>
                    <ul className="space-y-1.5 text-xs">
                      {mods.map((mod) => (
                        <li key={mod.slug}>
                          <Link
                            href={`/materi/${mod.slug}`}
                            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition"
                          >
                            <span>{mod.shortTitle}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-60" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 text-xs text-slate-500">
          <p>
            © {data.profile.year} {data.profile.name} — {data.profile.programName}
          </p>
          <p>Dibangun dengan Next.js, Tailwind CSS &amp; Firebase Firestore</p>
        </div>
      </div>
    </footer>
  );
}
