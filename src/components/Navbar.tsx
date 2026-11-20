"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  FolderKanban,
  BookOpen,
  ShieldCheck,
  Home,
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

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700 text-white shadow-md shadow-slate-300 group-hover:scale-105 transition">
            <Sparkles className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <p className="font-display text-base font-bold leading-tight text-slate-900">
              {data.profile.siteTitle}
            </p>
            <p className="text-[11px] font-medium text-slate-500">
              {data.profile.name} • IDN SMSIT
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
              pathname === "/"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>

          <Link
            href="/#about"
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            About Me
          </Link>

          {/* Training Journey Mega Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer ${
                pathname.startsWith("/materi")
                  ? "bg-blue-50 text-blue-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Training Journey ({completedCount}/12)
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-[780px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10">
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <p className="font-display text-sm font-bold text-slate-900">
                      Training Journey — Dokumentasi Pelatihan IDN SMSIT
                    </p>
                    <p className="text-xs text-slate-500">
                      12 topik materi pelatihan beserta dokumentasi project, catatan belajar, dan panduan praktik
                    </p>
                  </div>
                  <Link
                    href="/#training-journey"
                    onClick={() => setDropdownOpen(false)}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 hover:bg-blue-100 transition"
                  >
                    Lihat Roadmap ({completedCount}/12 Selesai)
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

          <Link
            href="/portofolio"
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
              pathname === "/portofolio"
                ? "bg-blue-50 text-blue-800"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <FolderKanban className="h-3.5 w-3.5" />
            My Projects
          </Link>

          <Link
            href="/tutorial"
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
              pathname === "/tutorial"
                ? "bg-blue-50 text-blue-800"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Teaching &amp; Learning Hub
          </Link>

          <Link
            href="/#pondok-tholabie"
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            Pondok Tholabie
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden xl:flex items-center gap-2">
          <Link
            href="/admin"
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition shadow-sm ${
              pathname === "/admin"
                ? "bg-slate-900 text-white"
                : isAdmin
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            {isAdmin ? "Dashboard Admin" : "Admin"}
            <span
              className={`ml-1 h-2 w-2 rounded-full ${
                firebaseReady ? "bg-emerald-400" : "bg-sky-400"
              }`}
              title={firebaseReady ? "Firebase Terhubung" : "Mode Lokal (Firebase Siap Dihubungkan)"}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex xl:hidden items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 cursor-pointer"
          aria-label="Buka menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 max-h-[82vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <Home className="h-4 w-4 text-blue-600" /> Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <Sparkles className="h-4 w-4 text-sky-600" /> About Me
            </Link>
            <Link
              href="/#training-journey"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <BookOpen className="h-4 w-4 text-emerald-600" /> Training Journey
            </Link>
            <Link
              href="/portofolio"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <FolderKanban className="h-4 w-4 text-sky-600" /> My Projects
            </Link>
            <Link
              href="/tutorial"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <BookOpen className="h-4 w-4 text-violet-600" /> Teaching &amp; Learning Hub
            </Link>
            <Link
              href="/#pondok-tholabie"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-800"
            >
              <Sparkles className="h-4 w-4 text-blue-700" /> Pondok Tholabie
            </Link>
          </div>
          <div>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white"
            >
              <ShieldCheck className="h-4 w-4 text-sky-400" /> Dashboard Admin
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              12 Halaman Materi (Hari 1 – 4)
            </p>
            {DAYS_META.map((dayInfo) => {
              const accent = ACCENT_STYLES[dayInfo.accentColor];
              const dayMods = data.modules.filter((m) => m.day === dayInfo.day);
              return (
                <div key={dayInfo.day} className="space-y-1">
                  <p className={`text-xs font-bold ${accent.text}`}>{dayInfo.label}</p>
                  {dayMods.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/materi/${mod.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-xs font-semibold text-slate-800"
                    >
                      <span className="flex items-center gap-2">
                        <ModuleIcon name={mod.iconName} className="h-3.5 w-3.5" />
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
