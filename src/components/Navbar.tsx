"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  FolderKanban,
  BookOpen,
  ShieldCheck,
  Home,
  Cpu,
  Mail,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import { ModuleIcon } from "@/components/ModuleIcon";

export function Navbar() {
  const pathname = usePathname();
  const { data, isAdmin, firebaseReady } = usePortfolio();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const completedCount = data.modules.filter((m) => m.status === "completed").length;
  const totalCount = data.modules.length;

  return (
    <header className="sticky top-0 z-40 border-b border-[#3a241b] bg-[#1e110c]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Pill: [N] EXPLORE NEXORANESIA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full border border-[#4a2e22] bg-[#2a1811] pl-2 pr-4 py-1.5 shadow-sm hover:border-[#f26722] transition group"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a1f14] border border-[#f26722]/40 font-display text-xs font-black text-[#ff732e] group-hover:bg-[#f26722] group-hover:text-white transition">
            N
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-white leading-none">
              EXPLORE NEXORANESIA
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-orange-300/80 mt-0.5">
              TIM IT PONDOK THOLABIE
            </span>
          </div>
        </Link>

        {/* Desktop Nav — Uppercase with subtle vertical dividers like reference */}
        <nav className="hidden xl:flex items-center text-[11px] font-extrabold uppercase tracking-[0.15em]">
          <Link
            href="/"
            className={`px-3.5 py-2 transition ${
              pathname === "/"
                ? "text-[#ff732e]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            HOME
          </Link>

          <span className="text-stone-700 select-none">|</span>

          <Link
            href="/#about"
            className="px-3.5 py-2 text-stone-300 hover:text-white transition"
          >
            ABOUT
          </Link>

          <span className="text-stone-700 select-none">|</span>

          {/* PROGRAMS Mega Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 uppercase tracking-[0.15em] transition cursor-pointer ${
                pathname.startsWith("/materi")
                  ? "text-[#ff732e]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              PROGRAMS ({completedCount}/{totalCount})
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180 text-[#ff732e]" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[800px] -translate-x-1/2 rounded-3xl border border-stone-200 bg-white p-5 text-slate-900 shadow-2xl shadow-black/30 normal-case tracking-normal">
                <div className="mb-3 flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900">
                      NEXORANESIA Programs &amp; Tech Modules — Tim IT Pondok Tholabie
                    </p>
                    <p className="text-xs text-slate-500">
                      {totalCount} program pengembangan teknologi, robotika, AI, 3D, dan pemrograman beserta karya &amp; modul
                    </p>
                  </div>
                  <Link
                    href="/#training-journey"
                    onClick={() => setDropdownOpen(false)}
                    className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-[#e05819] hover:bg-orange-100 transition"
                  >
                    Lihat Semua Program ({completedCount}/{totalCount} Aktif)
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  {DAYS_META.map((dayInfo) => {
                    const accent = ACCENT_STYLES[dayInfo.accentColor];
                    const dayMods = data.modules.filter((m) => m.day === dayInfo.day);
                    return (
                      <div
                        key={dayInfo.day}
                        className={`rounded-2xl border ${accent.border} ${accent.bgSoft} p-3`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${accent.badgeSolid}`}
                          >
                            {dayInfo.label}
                          </span>
                          <span className="text-[11px] font-medium text-slate-500 truncate ml-2">
                            {dayInfo.themeTitle}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {dayMods.map((mod) => {
                            const status = STATUS_META[mod.status];
                            const active = pathname === `/materi/${mod.slug}`;
                            return (
                              <Link
                                key={mod.slug}
                                href={`/materi/${mod.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className={`flex items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-xs font-semibold transition ${
                                  active
                                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                                    : "text-slate-700 hover:bg-white/80"
                                }`}
                              >
                                <span className="flex items-center gap-2 min-w-0">
                                  <span
                                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${accent.iconBg}`}
                                  >
                                    <ModuleIcon name={mod.iconName} className="h-3.5 w-3.5" />
                                  </span>
                                  <span className="truncate">{mod.title}</span>
                                </span>
                                <span
                                  className={`h-2 w-2 shrink-0 rounded-full ${status.dot}`}
                                  title={status.label}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <span className="text-stone-700 select-none">|</span>

          <Link
            href="/#activities"
            className="px-3.5 py-2 text-stone-300 hover:text-white transition"
          >
            ACTIVITIES
          </Link>

          <span className="text-stone-700 select-none">|</span>

          <Link
            href="/portofolio"
            className={`px-3.5 py-2 transition ${
              pathname === "/portofolio"
                ? "text-[#ff732e]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            PROJECTS
          </Link>

          <span className="text-stone-700 select-none">|</span>

          <Link
            href="/tutorial"
            className={`px-3.5 py-2 transition ${
              pathname === "/tutorial"
                ? "text-[#ff732e]"
                : "text-stone-300 hover:text-white"
            }`}
          >
            ARTIKEL &amp; MODUL
          </Link>

          <span className="text-stone-700 select-none">|</span>

          <Link
            href="/#contact"
            className="px-3.5 py-2 text-stone-300 hover:text-white transition"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right CTA: Admin */}
        <div className="hidden xl:flex items-center gap-2">
          <Link
            href="/admin"
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider transition shadow-sm ${
              pathname === "/admin"
                ? "bg-[#f26722] text-white"
                : isAdmin
                  ? "bg-[#f26722] text-white hover:bg-[#e05819]"
                  : "border border-[#4a2e22] bg-[#2a1811] text-stone-200 hover:border-[#f26722] hover:text-white"
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-[#ff732e]" />
            {isAdmin ? "DASHBOARD TIM IT" : "ADMIN"}
            <span
              className={`ml-1 h-2 w-2 rounded-full ${
                firebaseReady ? "bg-emerald-400" : "bg-orange-400"
              }`}
              title={firebaseReady ? "Firebase Terhubung" : "Mode Lokal (Firebase Siap Dihubungkan)"}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex xl:hidden items-center justify-center rounded-xl border border-[#4a2e22] bg-[#2a1811] p-2 text-stone-200 hover:border-[#f26722] cursor-pointer"
          aria-label="Buka menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[#3a241b] bg-[#1e110c] px-4 py-4 max-h-[82vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <Home className="h-4 w-4 text-[#ff732e]" /> HOME
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <Cpu className="h-4 w-4 text-[#ff732e]" /> ABOUT
            </Link>
            <Link
              href="/#training-journey"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <BookOpen className="h-4 w-4 text-emerald-400" /> PROGRAMS
            </Link>
            <Link
              href="/portofolio"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <FolderKanban className="h-4 w-4 text-sky-400" /> PROJECTS
            </Link>
            <Link
              href="/tutorial"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <BookOpen className="h-4 w-4 text-amber-400" /> ARTIKEL &amp; MODUL
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-[#2a1811] border border-[#3a241b] px-3 py-2.5 text-xs font-bold text-stone-100"
            >
              <Mail className="h-4 w-4 text-[#ff732e]" /> CONTACT
            </Link>
          </div>
          <div>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#f26722] px-3 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white"
            >
              <ShieldCheck className="h-4 w-4" /> Dashboard Admin Tim IT
            </Link>
          </div>

          <div className="space-y-3 pt-2 border-t border-[#3a241b]">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {totalCount} Program &amp; Modul Teknologi
            </p>
            {DAYS_META.map((dayInfo) => {
              const dayMods = data.modules.filter((m) => m.day === dayInfo.day);
              return (
                <div key={dayInfo.day} className="space-y-1">
                  <p className="text-xs font-bold text-[#ff732e]">
                    {dayInfo.label} — {dayInfo.themeTitle}
                  </p>
                  {dayMods.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/materi/${mod.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-[#3a241b] bg-[#2a1811]/80 px-3 py-2 text-xs font-semibold text-stone-200"
                    >
                      <span className="flex items-center gap-2">
                        <ModuleIcon name={mod.iconName} className="h-3.5 w-3.5 text-[#ff732e]" />
                        {mod.title}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${STATUS_META[mod.status].dot}`}
                      />
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
