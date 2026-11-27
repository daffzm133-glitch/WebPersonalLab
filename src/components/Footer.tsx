"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Building2,
  Clock,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";

export function Footer() {
  const { data } = usePortfolio();

  const totalProjects = data.modules.reduce((acc, m) => acc + m.projects.length, 0);
  const totalTutorials = data.modules.reduce((acc, m) => acc + m.tutorials.length, 0);

  return (
    <footer id="contact" className="mt-20 border-t border-stone-200/80 bg-[#f6f1eb] text-slate-700">
      {/* Top 4 Highlight Trust Cards — Matching NEXORANESIA Reference */}
      <div className="border-b border-stone-200/80 bg-[#f3ede6]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f26722]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Kurikulum &amp; Standar Industri
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Berbasis pelatihan intensif STEAM, AI, IoT &amp; Robotika
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  {totalProjects}+ Karya &amp; Prototipe Nyata
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Terdokumentasi lengkap beserta kode &amp; file 3D
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Perangkat &amp; Platform Modern
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  LEGO WeDo, Micro:bit, PictoBlox AI, WebAR &amp; Tinkercad
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-800">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900">
                  Tim IT Pondok Tholabie
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pusat inovasi, literasi digital &amp; pengembangan teknologi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns — Matching NEXORANESIA Reference Layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Column 1: Brand Identity & Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2a150d] font-display text-xl font-black text-[#ff732e] shadow-sm">
                N
              </div>
              <div>
                <p className="font-display text-xl font-black tracking-tight text-[#23140d] leading-none">
                  NEXORANESIA
                </p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f26722]">
                  INDONESIA&apos;S NEXT ERA OF INNOVATION
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              <strong>NEXORANESIA</strong> adalah brand dan pusat pengembangan pendidikan, produk,
              serta solusi teknologi terpadu yang dikelola oleh{" "}
              <strong>Tim IT Pondok Tholabie</strong> untuk membantu generasi muda dan institusi
              menguasai <em>Coding, Robotics, Artificial Intelligence (AI)</em>, dan{" "}
              <em>Digital Engineering</em>.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#f26722] mt-0.5" />
                <span>
                  Pusat Pengembangan Teknologi &amp; Tim IT — <strong>Pondok Tholabie</strong>
                </span>
              </div>
              {data.profile.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#f26722]" />
                  <a
                    href={`mailto:${data.profile.email}`}
                    className="hover:text-[#f26722] transition font-medium"
                  >
                    {data.profile.email}
                  </a>
                </div>
              )}
              {data.profile.github && (
                <div className="flex items-center gap-2.5">
                  <Code2 className="h-4 w-4 shrink-0 text-[#f26722]" />
                  <a
                    href={data.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#f26722] transition font-medium"
                  >
                    GitHub Repository &amp; Open Source Lab
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#f26722]" />
                <span>Senin – Sabtu: Pengembangan, Riset &amp; Dokumentasi</span>
              </div>
            </div>
          </div>

          {/* Column 2: EKOSISTEM PENGEMBANGAN */}
          <div className="lg:col-span-2 space-y-3">
            <p className="border-l-2 border-[#f26722] pl-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
              EKOSISTEM KAMI
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-[#f26722] shrink-0" />
                <Link href="/tutorial" className="hover:text-[#f26722] transition">
                  NEXORANESIA Academy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <Link
                  href="/materi/lego-wedo-education"
                  className="hover:text-[#f26722] transition"
                >
                  NEXORANESIA Robotics
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-violet-600 shrink-0" />
                <Link
                  href="/materi/ai-pictoblox-microbit"
                  className="hover:text-[#f26722] transition"
                >
                  NEXORANESIA AI &amp; Vision
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <Link href="/materi/math-battle" className="hover:text-[#f26722] transition">
                  NEXORANESIA EduGame
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                <Link
                  href="/materi/tinkercad-3d-design"
                  className="hover:text-[#f26722] transition"
                >
                  NEXORANESIA 3D Lab
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-3.5 w-3.5 text-slate-700 shrink-0" />
                <Link href="/#about" className="hover:text-[#f26722] transition">
                  Tim IT Pondok Tholabie
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PROGRAM & TEKNOLOGI (10 Modules) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="border-l-2 border-[#f26722] pl-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
              PROGRAM &amp; HARDWARE
            </p>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-600">
              {data.modules.map((mod) => (
                <li key={mod.slug}>
                  <Link
                    href={`/materi/${mod.slug}`}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-[#f26722] transition"
                  >
                    <span>{mod.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: PUSAT INFORMASI */}
          <div className="lg:col-span-2 space-y-3">
            <p className="border-l-2 border-[#f26722] pl-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-slate-900">
              PUSAT INFORMASI
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/portofolio" className="hover:text-[#f26722] transition">
                  Katalog Project &amp; Riset ({totalProjects})
                </Link>
              </li>
              <li>
                <Link href="/tutorial" className="hover:text-[#f26722] transition">
                  Artikel &amp; Panduan Teknologi ({totalTutorials})
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#f26722] transition">
                  Tentang Kami &amp; Tim IT
                </Link>
              </li>
              <li>
                <Link href="/#training-journey" className="hover:text-[#f26722] transition">
                  Kurikulum &amp; Roadmap Program
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 transition"
                >
                  Portal Admin Tim IT <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-slate-500">
          <p>
            © {data.profile.year} <strong className="text-slate-800">NEXORANESIA</strong> —{" "}
            <strong className="text-slate-800">Tim IT Pondok Tholabie</strong>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/#about" className="hover:text-slate-800 transition">
              Profil Tim IT
            </Link>
            <Link href="/portofolio" className="hover:text-slate-800 transition">
              Katalog Karya
            </Link>
            <Link href="/tutorial" className="hover:text-slate-800 transition">
              Pusat Modul
            </Link>
            <span className="font-bold text-[#f26722]">Made for Future Creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
