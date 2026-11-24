"use client";

import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Info,
  Laptop,
  Layout,
  Lightbulb,
  MessageSquareCode,
  Monitor,
  Play,
  QrCode,
  RefreshCw,
  Rocket,
  Smartphone,
  Sparkles,
  Tablet,
  Target,
  Trophy,
  User,
  Wand2,
  Zap,
} from "lucide-react";

export const MATH_BATTLE_PUBLIC_URL =
  "https://pilandok-9yl142.my.canva.site/math-battle-edu-game-website";

type ViewportMode = "desktop" | "tablet" | "mobile";
type PreviewMode = "showcase" | "embed";

interface MathBattleShowcaseProps {
  onOpenImage?: (src: string, caption: string) => void;
}

const DEVELOPMENT_PROCESS_STEPS = [
  {
    step: "01",
    label: "IDEA",
    title: "Perumusan Ide",
    desc: "Menentukan konsep permainan matematika interaktif yang menggabungkan edukasi, tantangan, dan pengalaman bermain.",
    icon: Lightbulb,
  },
  {
    step: "02",
    label: "PROMPT",
    title: "Instruksi / Prompt",
    desc: "Mendeskripsikan ide, konsep permainan, aturan, mekanisme, dan tampilan yang diinginkan ke dalam prompt.",
    icon: MessageSquareCode,
  },
  {
    step: "03",
    label: "CANVA AI",
    title: "Pemrosesan Canva AI",
    desc: "Memanfaatkan Canva AI (Prompt-Based Creation) untuk mengolah instruksi teks menjadi struktur permainan digital.",
    icon: Wand2,
  },
  {
    step: "04",
    label: "GAME CREATION",
    title: "Pembuatan Game",
    desc: "Menghasilkan antarmuka, navigasi, dan mekanisme permainan matematika interaktif di dalam Canva.",
    icon: Gamepad2,
  },
  {
    step: "05",
    label: "TESTING",
    title: "Uji Coba Interaksi",
    desc: "Menguji alur permainan, tantangan berhitung, dan tampilan responsif sebelum dipublikasikan.",
    icon: Target,
  },
  {
    step: "06",
    label: "RESULT",
    title: "Publikasi Produk",
    desc: "Menerbitkan game sebagai website publik Canva beserta QR Code agar siap dimainkan siapa saja.",
    icon: Rocket,
  },
];

const PROJECT_OBJECTIVES = [
  "Mengenal pemanfaatan Canva AI dalam pembuatan game.",
  "Memahami konsep prompt-based creation.",
  "Mengembangkan ide menjadi produk digital interaktif.",
  "Mengeksplorasi penggunaan game sebagai media pembelajaran.",
  "Mengenal potensi AI dalam mendukung kreativitas dan pengembangan teknologi pendidikan.",
];

export function MathBattleShowcase({ onOpenImage }: MathBattleShowcaseProps) {
  const [previewMode, setPreviewMode] = useState<PreviewMode>("showcase");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  const handleLaunchPopupGame = () => {
    const width = 1200;
    const height = 820;
    const left = Math.max(0, Math.round((window.screen.width - width) / 2));
    const top = Math.max(0, Math.round((window.screen.height - height) / 2));
    window.open(
      MATH_BATTLE_PUBLIC_URL,
      "MathBattleGameWindow",
      `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=yes,status=no,resizable=yes,scrollbars=yes`
    );
  };

  const viewportWidthClass =
    viewport === "desktop"
      ? "w-full"
      : viewport === "tablet"
        ? "max-w-[768px] mx-auto"
        : "max-w-[390px] mx-auto";

  return (
    <div className="space-y-8">
      {/* ==================== 1. PROJECT INTRODUCTION & 6. PROJECT INFORMATION ==================== */}
      <section className="overflow-hidden rounded-3xl border border-amber-200/90 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-900 px-6 py-5 sm:px-8 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-display font-black text-xl shadow-md">
              ✦
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/20 border border-amber-300/40 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                  AI-Powered Educational Game Development
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-bold text-sky-200">
                  Canva AI • Prompt-Based Creation
                </span>
              </div>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                MATH BATTLE — Create with AI, Learn through Play!
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleLaunchPopupGame}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md hover:bg-amber-300 transition cursor-pointer"
            >
              <Gamepad2 className="h-4 w-4" />
              Mainkan Langsung (Popup Interaktif)
            </button>
            <a
              href={MATH_BATTLE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 border border-white/25 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/25 transition"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Buka di Tab Baru
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* 1. Project Introduction & Project Objectives */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
                  01 • Project Introduction
                </p>
                <span className="rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-[11px] font-extrabold text-indigo-800">
                  Create with AI, Learn through Play!
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                MATH BATTLE — AI-Powered Educational Game Development
              </h3>

              <div className="space-y-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>MATH BATTLE</strong> merupakan proyek eksplorasi pengembangan game edukasi
                  menggunakan <strong>Canva AI</strong>. Proyek ini memperkenalkan pendekatan baru
                  dalam pembuatan permainan digital, di mana proses pengembangan dapat dilakukan
                  melalui instruksi atau <strong>prompt</strong> yang diberikan kepada AI.
                </p>
                <p>
                  Dengan mendeskripsikan ide, konsep permainan, aturan, mekanisme, dan tampilan yang
                  diinginkan, pengguna dapat memanfaatkan <strong>Canva AI</strong> untuk membantu
                  menghasilkan sebuah game interaktif.
                </p>
                <p>
                  <strong>MATH BATTLE</strong> mengambil konsep permainan matematika sebagai media
                  pembelajaran yang menggabungkan edukasi, tantangan, dan pengalaman bermain. Proyek
                  ini merupakan bagian dari hasil pembelajaran dan praktik selama mengikuti pelatihan
                  di <strong>IDN SMSIT</strong>, sekaligus menjadi bentuk eksplorasi pemanfaatan{" "}
                  <strong>Artificial Intelligence</strong> dalam pengembangan media pembelajaran
                  digital.
                </p>
              </div>
            </div>

            {/* Project Objectives Box */}
            <div className="rounded-2xl border border-amber-200/90 bg-amber-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                <Target className="h-4 w-4 text-amber-600" />
                Project Objectives (Tujuan Proyek)
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {PROJECT_OBJECTIVES.map((obj, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700 leading-snug"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Project Information Table */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                    06 • Project Information
                  </p>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Identitas Resmi Proyek
                  </h4>
                </div>
                <span className="rounded-full bg-emerald-100 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  Published • Live
                </span>
              </div>

              <dl className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Project</dt>
                  <dd className="font-display font-extrabold text-slate-900">MATH BATTLE</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Subtitle</dt>
                  <dd className="font-bold text-indigo-800 text-right">
                    AI-Powered Educational Game Development
                  </dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Category</dt>
                  <dd className="font-bold text-blue-800">Educational Technology &amp; AI</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Type</dt>
                  <dd className="font-bold text-slate-800">Educational Game Website</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Platform &amp; Method</dt>
                  <dd className="font-semibold text-slate-700">Canva AI (Prompt-Based Creation)</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500">Learning Program</dt>
                  <dd className="font-bold text-slate-900">IDN SMSIT</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500 flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-slate-400" /> Creator
                  </dt>
                  <dd className="font-bold text-slate-900">Daffa Zidan</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-slate-500 flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 text-slate-400" /> Affiliation
                  </dt>
                  <dd className="font-bold text-blue-900">Pondok Tholabie</dd>
                </div>
              </dl>

              <div className="rounded-xl bg-white border border-slate-200 p-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Canva Public Game Link
                  </p>
                  <p className="text-xs font-mono font-semibold text-blue-700 truncate">
                    {MATH_BATTLE_PUBLIC_URL}
                  </p>
                </div>
                <a
                  href={MATH_BATTLE_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-blue-900 transition"
                >
                  Buka
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. PROJECT OVERVIEW & DEVELOPMENT PROCESS ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
              02 • Project Overview &amp; Development Process
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
              Alur Pengembangan Berbasis Prompt (Prompt-Based Creation dengan Canva AI)
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-extrabold text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            Create with AI, Learn through Play!
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Melalui pendekatan <strong>Prompt-Based Creation</strong> di <strong>Canva AI</strong>,
          pengembangan permainan tidak lagi dimulai dari kanvas kosong secara manual, melainkan
          dari perumusan ide dan penyusunan instruksi (<em>prompt</em>) yang mendeskripsikan konsep
          permainan matematika, aturan main, mekanisme tantangan, serta tampilan visual yang
          diinginkan hingga menjadi produk game interaktif.
        </p>

        {/* Visual Pipeline: IDEA → PROMPT → CANVA AI → GAME CREATION → TESTING → RESULT */}
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-5 text-white">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 mb-3">
            Development Process Pipeline
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-display font-extrabold">
            {DEVELOPMENT_PROCESS_STEPS.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/15 px-3 py-1.5 text-white">
                  <span className="text-amber-300">{item.step}.</span> {item.label}
                </span>
                {idx < DEVELOPMENT_PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-amber-400 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Step Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEVELOPMENT_PROCESS_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5 hover:border-amber-400 hover:bg-white transition"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-200 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-900">
                    STEP {item.step} • {item.label}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="font-display text-base font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 3. GAME PREVIEW & PLAY (CANVA INTEGRATION) ==================== */}
      <section
        id="math-battle-play"
        className="overflow-hidden rounded-3xl border-2 border-indigo-200 bg-white shadow-md"
      >
        {/* Top Toolbar */}
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 sm:px-7 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                03 • Game Preview &amp; Play — Interactive Product Showcase
              </p>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-extrabold">
              Uji Coba &amp; Mainkan MATH BATTLE (Canva AI Game)
            </h3>
          </div>

          {/* Mode & Viewport Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Switch between Visual Launcher & Direct Iframe Embed */}
            <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setPreviewMode("showcase")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  previewMode === "showcase"
                    ? "bg-amber-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                Game Launcher
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode("embed")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  previewMode === "embed"
                    ? "bg-amber-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Layout className="h-3.5 w-3.5" />
                Live Embed Frame
              </button>
            </div>

            {/* Responsive Viewport Selector */}
            <div className="hidden sm:inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Tampilan Desktop"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "desktop"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tampilan Tablet"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "tablet"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Tampilan Mobile"
                className={`rounded-lg p-1.5 text-xs transition cursor-pointer ${
                  viewport === "mobile"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>

            <a
              href={MATH_BATTLE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2 text-xs font-extrabold text-slate-950 hover:bg-amber-300 transition"
            >
              <Play className="h-3.5 w-3.5 fill-slate-950" />
              Main di Tab Baru
            </a>
          </div>
        </div>

        {/* Browser Mockup Address Bar */}
        <div className="border-b border-slate-200 bg-slate-100 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>

          <div className="flex-1 max-w-2xl rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-mono text-slate-600 flex items-center justify-between gap-2 truncate">
            <span className="truncate">{MATH_BATTLE_PUBLIC_URL}</span>
            <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-sans font-bold text-emerald-700 border border-emerald-200">
              Canva AI Public Site
            </span>
          </div>

          <div className="flex items-center gap-2">
            {previewMode === "embed" && (
              <button
                type="button"
                onClick={() => setIframeKey((k) => k + 1)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                title="Muat ulang frame"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reload
              </button>
            )}
            <button
              type="button"
              onClick={handleLaunchPopupGame}
              className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer"
            >
              <Gamepad2 className="h-3.5 w-3.5" />
              Buka Jendela Game
            </button>
          </div>
        </div>

        {/* Responsive Preview Container */}
        <div className="bg-slate-900/95 p-4 sm:p-6">
          <div className={`${viewportWidthClass} transition-all duration-300`}>
            {previewMode === "showcase" ? (
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-700 via-blue-700 to-violet-800 text-white shadow-2xl">
                {/* Interactive Replica Header of MATH BATTLE */}
                <div className="bg-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-slate-800 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-sm">
                      ✦
                    </span>
                    <span className="font-display text-base font-black tracking-tight text-blue-700">
                      MATH BATTLE
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-5 text-xs font-bold text-slate-600">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-0.5">
                      Beranda
                    </span>
                    <span>Cara Bermain</span>
                    <span>Leaderboard</span>
                    <span>Profil / Login</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
                    🚀 Pemain
                  </span>
                </div>

                {/* Main Hero Stage */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-10 lg:items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                      ⚡ PETUALANGAN MATEMATIKA DIMULAI!
                    </span>
                    <h4 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight">
                      ASAH OTAK,{" "}
                      <span className="block text-amber-300">TAKLUKKAN ANGKA!</span>
                    </h4>
                    <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                      Belajar matematika jadi lebih seru. Tantang temanmu dan buktikan siapa yang
                      paling jago!
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleLaunchPopupGame}
                        className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 hover:bg-amber-300 hover:scale-[1.02] transition cursor-pointer"
                      >
                        <Gamepad2 className="h-5 w-5" />
                        MAIN SEKARANG (POPUP GAME)
                      </button>

                      <a
                        href={MATH_BATTLE_PUBLIC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-blue-800 shadow-md hover:bg-blue-50 transition"
                      >
                        <ExternalLink className="h-4 w-4" />
                        + BUAT GAME / BUKA TAB BARU
                      </a>
                    </div>

                    <p className="text-xs text-blue-200/90 pt-1">
                      Klik <strong>&ldquo;MAIN SEKARANG&rdquo;</strong> untuk membuka jendela
                      permainan interaktif MATH BATTLE hasil pengembangan dengan{" "}
                      <strong>Canva AI</strong>.
                    </p>
                  </div>

                  {/* Preview Screenshot & QR Card */}
                  <div className="lg:col-span-5 space-y-3">
                    <div
                      onClick={() =>
                        onOpenImage?.(
                          "/assets/canva/math-battle-canva-preview.jpg",
                          "Tampilan Antarmuka Website Permainan Edukasi MATH BATTLE yang Dikembangkan dengan Canva AI"
                        )
                      }
                      className="group relative overflow-hidden rounded-2xl border-2 border-white/25 bg-slate-950 shadow-xl cursor-zoom-in"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/canva/math-battle-canva-preview.jpg"
                        alt="MATH BATTLE Canva AI Game Preview"
                        className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-3.5">
                        <span className="text-xs font-bold text-white">
                          Preview MATH BATTLE (Canva AI)
                        </span>
                        <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-[11px] font-extrabold text-slate-950">
                          Klik Perbesar
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 border border-white/20 p-3.5 backdrop-blur-sm flex items-center gap-3.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/canva/math-battle-qrcode.png"
                        alt="QR Code MATH BATTLE"
                        onClick={() =>
                          onOpenImage?.(
                            "/assets/canva/math-battle-qrcode.png",
                            "Scan QR Code untuk memainkan MATH BATTLE langsung di Smartphone"
                          )
                        }
                        className="h-16 w-16 shrink-0 rounded-xl bg-white p-1 object-contain cursor-zoom-in"
                      />
                      <div className="text-xs space-y-1">
                        <p className="font-extrabold text-amber-300 flex items-center gap-1">
                          <QrCode className="h-3.5 w-3.5" /> Scan &amp; Main di HP
                        </p>
                        <p className="text-blue-100 leading-snug">
                          Pindai QR Code ini dengan kamera smartphone untuk mencoba permainan MATH
                          BATTLE secara mobile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Direct Live Iframe Embed Mode with automatic fallback bar */
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl">
                  <iframe
                    key={iframeKey}
                    src={MATH_BATTLE_PUBLIC_URL}
                    title="MATH BATTLE — AI-Powered Educational Game Website (Canva AI)"
                    className="h-[560px] w-full border-0"
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
                <div className="rounded-2xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 shrink-0 text-amber-300" />
                    <span>
                      Domain publik <code className="font-mono">*.my.canva.site</code> menerapkan
                      kebijakan keamanan browser (<code className="font-mono">X-Frame-Options: SAMEORIGIN</code>).
                      Jika layar embed dibatasi oleh browser Anda, gunakan tombol{" "}
                      <strong>Jendela Game Interaktif</strong> atau <strong>Tab Baru</strong>.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleLaunchPopupGame}
                      className="rounded-xl bg-amber-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 hover:bg-amber-300 transition cursor-pointer"
                    >
                      Buka Jendela Game
                    </button>
                    <a
                      href={MATH_BATTLE_PUBLIC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white/15 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/25 transition"
                    >
                      Buka Tab Baru
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== 4. PROJECT FEATURES ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
            04 • Project Features
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Fitur &amp; Karakteristik Permainan MATH BATTLE
          </h3>
          <p className="text-sm text-slate-600">
            Berdasarkan implementasi nyata pada <strong>MATH BATTLE Edu Game Website</strong> yang
            dihasilkan dengan bantuan <strong>Canva AI</strong>:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-800">
              01 • Prompt-Based AI Generation
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Dibangun Melalui Instruksi Canva AI
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Antarmuka, aturan, dan mekanisme permainan dihasilkan melalui deskripsi prompt kepada{" "}
              <strong>Canva AI</strong> yang menerjemahkan ide permainan matematika menjadi produk
              web interaktif.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-extrabold text-blue-800">
              02 • Navigation Bar
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Navigasi Permainan Terstruktur
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Header website dilengkapi identitas logo <strong>MATH BATTLE</strong> serta menu
              navigasi menuju <strong>Beranda</strong>, <strong>Cara Bermain</strong>,{" "}
              <strong>Leaderboard</strong>, dan <strong>Profil / Login</strong> beserta badge status{" "}
              <strong>Pemain</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-800">
              03 • Interactive Actions
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Aksi &ldquo;Main Sekarang&rdquo; &amp; &ldquo;+ Buat Game&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Halaman utama menyediakan dua tombol aksi interaktif bagi pemain: tombol{" "}
              <strong>MAIN SEKARANG</strong> untuk memulai tantangan matematika dan tombol{" "}
              <strong>+ BUAT GAME</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-extrabold text-violet-800">
              04 • Visual Identity
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Visual Edukatif &amp; Elemen Matematika
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mengusung slogan <em>&ldquo;ASAH OTAK, TAKLUKKAN ANGKA!&rdquo;</em> dengan ilustrasi
              karakter serta elemen simbol matematika (<code>+</code>), angka (<code>7</code>),
              trofi, dan bintang.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
              05 • Challenge &amp; Leaderboard
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Edukasi, Tantangan &amp; Kompetisi
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menggabungkan latihan soal matematika dengan panduan <em>Cara Bermain</em> dan{" "}
              <em>Leaderboard</em> untuk menghadirkan pengalaman belajar sambil bermain yang seru.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-extrabold text-rose-800">
              06 • Multi-Device Publishing
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Publikasi Web &amp; Akses QR Code
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dipublikasikan ke domain publik Canva (<code className="font-mono">my.canva.site</code>)
              dan dilengkapi QR Code sehingga mudah diakses dari laptop maupun perangkat mobile.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 5. LEARNING & DEVELOPMENT ==================== */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-sm space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
              05 • Learning &amp; Development — IDN SMSIT Training Journey
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold">
              Eksplorasi Artificial Intelligence dalam Media Pembelajaran Digital
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Proyek <strong>MATH BATTLE</strong> merupakan bagian dari hasil pembelajaran dan
              praktik selama mengikuti pelatihan di <strong>IDN SMSIT</strong>, sekaligus menjadi
              bentuk eksplorasi pemanfaatan <strong>Artificial Intelligence (Canva AI)</strong>{" "}
              dalam mempercepat pengembangan media pembelajaran digital interaktif.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-amber-300">
            <Award className="h-4 w-4" />
            Create with AI, Learn through Play!
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              Capaian Pembelajaran (Project Objectives)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {PROJECT_OBJECTIVES.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sky-400" />
              Potensi Penerapan di Pondok Tholabie
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Memperkenalkan pendekatan <strong>prompt-based creation</strong> dengan{" "}
                  <strong>Canva AI</strong> kepada santri dan pengajar untuk mewujudkan ide media
                  edukasi menjadi produk interaktif.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Menghadirkan permainan matematika <strong>MATH BATTLE</strong> sebagai sarana
                  belajar sambil bermain (<em>Learn through Play</em>) yang menyenangkan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>
                  Mendorong pemanfaatan AI secara kreatif dan produktif dalam pengembangan
                  teknologi pendidikan di lingkungan <strong>Pondok Tholabie</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
