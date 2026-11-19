import type { AccentColor, DayMeta, ModuleStatus } from "@/types/curriculum";

export const DAYS_META: DayMeta[] = [
  {
    day: 1,
    label: "Hari Ke-1",
    themeTitle: "Fondasi Robotika, 3D & Game Coding",
    description:
      "Merakit robot edukasi LEGO WeDo 2.0, mendesain objek siap cetak 3D dengan Tinkercad, hingga membuat animasi & game interaktif di Scratch.",
    accentColor: "emerald",
  },
  {
    day: 2,
    label: "Hari Ke-2",
    themeTitle: "Robotika Tiny:bit, IoT & Dunia Virtual",
    description:
      "Pemrograman robot pintar Tiny:bit, merancang sistem Internet of Things berbasis Micro:bit, dan coding game kreatif di Minecraft Education.",
    accentColor: "sky",
  },
  {
    day: 3,
    label: "Hari Ke-3",
    themeTitle: "Teknologi Masa Depan: AR, AI & 3D Game",
    description:
      "Membangun pengalaman Augmented Reality berbasis web (WebAR), kecerdasan buatan dengan PictoBlox + Micro:bit, dan pembuatan game 3D di Roblox.",
    accentColor: "violet",
  },
  {
    day: 4,
    label: "Hari Ke-4",
    themeTitle: "Kreasi Digital & Aplikasi Android",
    description:
      "Merancang materi visual profesional dengan Canva, produksi video kreatif di CapCut, hingga merakit aplikasi Android sendiri pakai Thunkable.",
    accentColor: "amber",
  },
];

export const ACCENT_STYLES: Record<
  AccentColor,
  {
    badge: string;
    badgeSolid: string;
    border: string;
    borderHover: string;
    bgSoft: string;
    text: string;
    iconBg: string;
    gradient: string;
    ring: string;
    bar: string;
  }
> = {
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    badgeSolid: "bg-emerald-600 text-white",
    border: "border-emerald-200",
    borderHover: "hover:border-emerald-400",
    bgSoft: "bg-emerald-50/70",
    text: "text-emerald-700",
    iconBg: "bg-emerald-500 text-white shadow-emerald-200",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    ring: "focus:ring-emerald-400",
    bar: "bg-emerald-500",
  },
  sky: {
    badge: "bg-sky-100 text-sky-800 border-sky-200",
    badgeSolid: "bg-sky-600 text-white",
    border: "border-sky-200",
    borderHover: "hover:border-sky-400",
    bgSoft: "bg-sky-50/70",
    text: "text-sky-700",
    iconBg: "bg-sky-500 text-white shadow-sky-200",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    ring: "focus:ring-sky-400",
    bar: "bg-sky-500",
  },
  violet: {
    badge: "bg-violet-100 text-violet-800 border-violet-200",
    badgeSolid: "bg-violet-600 text-white",
    border: "border-violet-200",
    borderHover: "hover:border-violet-400",
    bgSoft: "bg-violet-50/70",
    text: "text-violet-700",
    iconBg: "bg-violet-500 text-white shadow-violet-200",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    ring: "focus:ring-violet-400",
    bar: "bg-violet-500",
  },
  amber: {
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    badgeSolid: "bg-amber-500 text-white",
    border: "border-amber-200",
    borderHover: "hover:border-amber-400",
    bgSoft: "bg-amber-50/70",
    text: "text-amber-700",
    iconBg: "bg-amber-500 text-white shadow-amber-200",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    ring: "focus:ring-amber-400",
    bar: "bg-amber-500",
  },
};

export const STATUS_META: Record<
  ModuleStatus,
  { label: string; badge: string; dot: string }
> = {
  completed: {
    label: "Selesai",
    badge: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    dot: "bg-emerald-500",
  },
  "in-progress": {
    label: "Sedang Dipelajari",
    badge: "bg-amber-100 text-amber-800 border border-amber-200",
    dot: "bg-amber-500",
  },
  upcoming: {
    label: "Segera Dipelajari",
    badge: "bg-slate-100 text-slate-600 border border-slate-200",
    dot: "bg-slate-400",
  },
};
