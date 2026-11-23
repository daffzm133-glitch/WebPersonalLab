"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  CloudUpload,
  Database,
  Download,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Lock,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  StickyNote,
  Trash2,
  Upload,
  UserCircle2,
} from "lucide-react";
import { usePortfolio } from "@/lib/store";
import { ACCENT_STYLES, DAYS_META, STATUS_META } from "@/lib/theme";
import type {
  ModuleStatus,
  NoteItem,
  PortfolioData,
  PortfolioProfile,
  ProjectItem,
  TutorialItem,
  TutorialStep,
} from "@/types/curriculum";

function AdminContent() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("module") || "lego-wedo-education";

  const {
    data,
    syncing,
    firebaseReady,
    firebaseHasData,
    user,
    isAdmin,
    loginFirebase,
    loginDemo,
    logout,
    updateProfile,
    updateModuleStatus,
    saveProject,
    deleteProject,
    saveNote,
    deleteNote,
    saveTutorial,
    deleteTutorial,
    seedToFirestore,
    resetToSeed,
    importJsonData,
    showToast,
  } = usePortfolio();

  // Auth form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  // Admin navigation
  const [section, setSection] = useState<"modules" | "profile">("modules");
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSlug);
  const [moduleTab, setModuleTab] = useState<"projects" | "notes" | "tutorials">("projects");

  useEffect(() => {
    if (initialSlug && data.modules.some((m) => m.slug === initialSlug)) {
      setSelectedSlug(initialSlug);
    }
  }, [initialSlug, data.modules]);

  const currentMod =
    data.modules.find((m) => m.slug === selectedSlug) || data.modules[0];

  // Profile form state
  const [profileForm, setProfileForm] = useState<PortfolioProfile>(data.profile);
  const [skillsText, setSkillsText] = useState(data.profile.skills.join(", "));
  useEffect(() => {
    setProfileForm(data.profile);
    setSkillsText(data.profile.skills.join(", "));
  }, [data.profile]);

  // Project form state
  const [projForm, setProjForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    image: "",
    downloadUrl: "",
    downloadLabel: "",
    stlUrl: "",
    demoUrl: "",
    tags: "",
    date: new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    featured: true,
  });

  // Note form state
  const [noteForm, setNoteForm] = useState({
    id: "",
    title: "",
    category: "Catatan Pelatihan",
    summary: "",
    content: "",
    shortcutsRaw: "",
    tipsRaw: "",
  });

  // Tutorial form state
  const [tutForm, setTutForm] = useState<{
    id: string;
    title: string;
    subtitle: string;
    difficulty: "Pemula" | "Menengah" | "Lanjutan";
    duration: string;
    toolsRaw: string;
    goal: string;
    downloadUrl: string;
    downloadLabel: string;
    steps: TutorialStep[];
  }>({
    id: "",
    title: "",
    subtitle: "",
    difficulty: "Pemula",
    duration: "30 menit",
    toolsRaw: "",
    goal: "",
    downloadUrl: "",
    downloadLabel: "",
    steps: [{ stepNumber: 1, title: "", description: "", image: "", tip: "", codeSnippet: "" }],
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoggingIn(true);
    try {
      await loginFirebase(email, password);
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : "Email atau password tidak sesuai."
      );
    } finally {
      setLoggingIn(false);
    }
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projForm.title.trim()) return;
    const item: ProjectItem = {
      id: projForm.id || `proj-${Date.now()}`,
      title: projForm.title.trim(),
      subtitle: projForm.subtitle.trim() || "Project Pelatihan",
      description: projForm.description.trim(),
      image: projForm.image.trim() || "/assets/tinkercad/ganci-daffa.png",
      downloadUrl: projForm.downloadUrl.trim() || undefined,
      downloadLabel: projForm.downloadLabel.trim() || undefined,
      stlUrl: projForm.stlUrl.trim() || undefined,
      demoUrl: projForm.demoUrl.trim() || undefined,
      tags: projForm.tags
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      date: projForm.date.trim() || "2026",
      featured: projForm.featured,
    };
    await saveProject(currentMod.slug, item);
    setProjForm({
      id: "",
      title: "",
      subtitle: "",
      description: "",
      image: "",
      downloadUrl: "",
      downloadLabel: "",
      stlUrl: "",
      demoUrl: "",
      tags: "",
      date: projForm.date,
      featured: true,
    });
  };

  const handleSaveNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteForm.title.trim()) return;
    const shortcuts = noteForm.shortcutsRaw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [keys = "", action = "", detail = ""] = line.split("|").map((s) => s.trim());
        return { keys, action, detail: detail || undefined };
      })
      .filter((s) => s.keys && s.action);

    const tips = noteForm.tipsRaw
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const note: NoteItem = {
      id: noteForm.id || `note-${Date.now()}`,
      title: noteForm.title.trim(),
      category: noteForm.category.trim() || "Catatan",
      summary: noteForm.summary.trim(),
      content: noteForm.content.trim(),
      shortcuts: shortcuts.length > 0 ? shortcuts : undefined,
      tips: tips.length > 0 ? tips : undefined,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    await saveNote(currentMod.slug, note);
    setNoteForm({
      id: "",
      title: "",
      category: "Catatan Pelatihan",
      summary: "",
      content: "",
      shortcutsRaw: "",
      tipsRaw: "",
    });
  };

  const handleSaveTutorial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tutForm.title.trim()) return;
    const cleanSteps = tutForm.steps
      .filter((s) => s.title.trim() || s.description.trim())
      .map((s, idx) => ({
        stepNumber: idx + 1,
        title: s.title.trim(),
        description: s.description.trim(),
        image: s.image?.trim() || undefined,
        tip: s.tip?.trim() || undefined,
        codeSnippet: s.codeSnippet?.trim() || undefined,
      }));

    const tutorial: TutorialItem = {
      id: tutForm.id || `tut-${Date.now()}`,
      title: tutForm.title.trim(),
      subtitle: tutForm.subtitle.trim(),
      difficulty: tutForm.difficulty,
      duration: tutForm.duration.trim() || "30 menit",
      tools: tutForm.toolsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      goal: tutForm.goal.trim(),
      steps: cleanSteps,
      downloadUrl: tutForm.downloadUrl.trim() || undefined,
      downloadLabel: tutForm.downloadLabel.trim() || undefined,
    };
    await saveTutorial(currentMod.slug, tutorial);
    setTutForm({
      id: "",
      title: "",
      subtitle: "",
      difficulty: "Pemula",
      duration: "30 menit",
      toolsRaw: "",
      goal: "",
      downloadUrl: "",
      downloadLabel: "",
      steps: [{ stepNumber: 1, title: "", description: "", image: "", tip: "", codeSnippet: "" }],
    });
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `daffa-steam-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup JSON berhasil diunduh!");
  };

  const handleImportJson = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as PortfolioData;
      if (!parsed.profile || !Array.isArray(parsed.modules)) {
        throw new Error("Format file backup tidak valid.");
      }
      await importJsonData(parsed);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Gagal mengimpor file JSON.");
    }
    e.target.value = "";
  };

  // ==================== LOGIN GATE ====================
  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="font-display text-2xl font-extrabold text-slate-900">
              Dashboard Admin Portofolio
            </h1>
            <p className="text-sm text-slate-600">
              Kelola {data.modules.length} materi pelatihan, tambah project, catatan, shortcut, dan tutorial langsung
              dari browser.
            </p>
          </div>

          {firebaseReady ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                <Database className="h-4 w-4 shrink-0" />
                Firebase Auth & Firestore aktif. Masuk dengan akun admin Firebase kamu.
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Admin
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="daffzm133@gmail.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              {authError && (
                <p className="rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700">
                  {authError}
                </p>
              )}
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition cursor-pointer disabled:opacity-60"
              >
                {loggingIn ? "Memeriksa akun..." : "Masuk dengan Firebase Auth"}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 space-y-2 leading-relaxed">
                <p className="font-bold flex items-center gap-1.5">
                  <Database className="h-4 w-4 text-amber-600" />
                  Firebase Belum Dihubungkan (Mode Lokal Aktif)
                </p>
                <p>
                  Kamu tetap bisa mencoba & mengedit seluruh isi website sekarang (tersimpan di
                  browser lokal). Untuk menyimpannya ke cloud <strong>Firebase Firestore</strong>{" "}
                  (100% gratis Spark Plan), salin <code className="font-mono">.env.example</code>{" "}
                  menjadi <code className="font-mono">.env.local</code> lalu isi{" "}
                  <code className="font-mono">firebaseConfig</code> kamu.
                </p>
              </div>
              <button
                onClick={loginDemo}
                className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition cursor-pointer"
              >
                Masuk Dashboard Admin (Mode Lokal)
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ==================== ADMIN DASHBOARD ====================
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      {/* Top Status & Sync Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-extrabold text-slate-900">
              Dashboard Admin
            </h1>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                firebaseReady
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  firebaseReady ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
              {firebaseReady
                ? syncing
                  ? "Menyinkronkan ke Firestore..."
                  : `Firebase Terhubung (${user?.email || "Admin"})`
                : "Mode Lokal (Siap Dihubungkan ke Firebase)"}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Pilih salah satu dari {data.modules.length} materi untuk menambah Project, Catatan, Tutorial, atau ubah
            status progres belajar.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {firebaseReady && (
            <button
              onClick={seedToFirestore}
              disabled={syncing}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition cursor-pointer disabled:opacity-60"
            >
              <CloudUpload className="h-4 w-4" />
              {firebaseHasData ? "Sync Semua ke Firestore" : "Upload Data Awal ke Firestore"}
            </button>
          )}
          <button
            onClick={handleExportJson}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            <Download className="h-4 w-4" /> Backup JSON
          </button>
          <label className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer">
            <Upload className="h-4 w-4" /> Import JSON
            <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
          </label>
          <button
            onClick={resetToSeed}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            title="Kembalikan data lokal ke default awal"
          >
            <RotateCcw className="h-4 w-4" /> Reset Lokal
          </button>
          <button
            onClick={logout}
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <LogOut className="h-4 w-4" /> Keluar
          </button>
        </div>
      </div>

      {/* Main Switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => setSection("modules")}
          className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition cursor-pointer ${
            section === "modules"
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <FolderKanban className="h-4 w-4" /> Kelola {data.modules.length} Materi
        </button>
        <button
          onClick={() => setSection("profile")}
          className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition cursor-pointer ${
            section === "profile"
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <UserCircle2 className="h-4 w-4" /> Edit Profil Portofolio
        </button>
      </div>

      {/* ==================== SECTION: EDIT PROFILE ==================== */}
      {section === "profile" ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await updateProfile({
              ...profileForm,
              skills: skillsText
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            });
          }}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5 max-w-4xl"
        >
          <h2 className="font-display text-xl font-bold text-slate-900">
            Identitas & Informasi Portofolio
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nama Lengkap">
              <input
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Nama Panggilan">
              <input
                value={profileForm.displayName}
                onChange={(e) => setProfileForm({ ...profileForm, displayName: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Judul Website">
              <input
                value={profileForm.siteTitle}
                onChange={(e) => setProfileForm({ ...profileForm, siteTitle: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Peran / Jabatan">
              <input
                value={profileForm.role}
                onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Nama Program Pelatihan">
              <input
                value={profileForm.programName}
                onChange={(e) => setProfileForm({ ...profileForm, programName: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Tahun">
              <input
                value={profileForm.year}
                onChange={(e) => setProfileForm({ ...profileForm, year: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Email Publik">
              <input
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
            <Field label="Link GitHub">
              <input
                value={profileForm.github}
                onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
              />
            </Field>
          </div>
          <Field label="Bio Singkat (tampil di Hero Beranda)">
            <textarea
              rows={3}
              value={profileForm.bio}
              onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
            />
          </Field>
          <Field label="Misi / Fokus Pengajaran">
            <textarea
              rows={2}
              value={profileForm.mission}
              onChange={(e) => setProfileForm({ ...profileForm, mission: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
            />
          </Field>
          <Field label="Daftar Skills (pisahkan dengan koma)">
            <input
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm"
            />
          </Field>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition cursor-pointer"
          >
            <Save className="h-4 w-4" /> Simpan Perubahan Profil
          </button>
        </form>
      ) : (
        /* ==================== SECTION: MANAGE 12 MODULES ==================== */
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Modules Selector */}
          <aside className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm space-y-4 h-fit">
            <p className="px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Pilih Materi ({data.modules.length} Halaman)
            </p>
            {DAYS_META.map((dayInfo) => {
              const accent = ACCENT_STYLES[dayInfo.accentColor];
              const mods = data.modules.filter((m) => m.day === dayInfo.day);
              return (
                <div key={dayInfo.day} className="space-y-1.5">
                  <p className={`px-2 text-xs font-extrabold ${accent.text}`}>{dayInfo.label}</p>
                  {mods.map((mod) => {
                    const active = mod.slug === currentMod.slug;
                    return (
                      <button
                        key={mod.slug}
                        onClick={() => setSelectedSlug(mod.slug)}
                        className={`w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-bold transition cursor-pointer ${
                          active
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="truncate">
                          {mod.order}. {mod.shortTitle}
                        </span>
                        <span className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] opacity-75">
                            {mod.projects.length}P / {mod.tutorials.length}T
                          </span>
                          <span
                            className={`h-2 w-2 rounded-full ${STATUS_META[mod.status].dot}`}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </aside>

          {/* Right: Selected Module Workspace */}
          <div className="lg:col-span-8 space-y-6">
            {/* Module Status Header */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Hari Ke-{currentMod.day} • Modul #{currentMod.order}
                  </span>
                  <h2 className="font-display text-2xl font-extrabold text-slate-900">
                    {currentMod.title}
                  </h2>
                </div>
                <Link
                  href={`/materi/${currentMod.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Lihat Halaman <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-600 mr-1">Status Progres:</span>
                {(["completed", "in-progress", "upcoming"] as ModuleStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => updateModuleStatus(currentMod.slug, st)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                      currentMod.status === st
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {STATUS_META[st].label}
                  </button>
                ))}
              </div>

              {/* Sub-tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setModuleTab("projects")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    moduleTab === "projects"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <FolderKanban className="h-4 w-4" /> Project ({currentMod.projects.length})
                </button>
                <button
                  onClick={() => setModuleTab("notes")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    moduleTab === "notes"
                      ? "bg-amber-500 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <StickyNote className="h-4 w-4" /> Catatan ({currentMod.notes.length})
                </button>
                <button
                  onClick={() => setModuleTab("tutorials")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                    moduleTab === "tutorials"
                      ? "bg-violet-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" /> Tutorial ({currentMod.tutorials.length})
                </button>
              </div>
            </div>

            {/* ===== SUBTAB: PROJECTS ===== */}
            {moduleTab === "projects" && (
              <div className="space-y-5">
                {/* Existing Projects List */}
                <div className="rounded-3xl border border-slate-200 bg-white p-5 space-y-3">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Daftar Project Tersimpan ({currentMod.projects.length})
                  </h3>
                  {currentMod.projects.length === 0 ? (
                    <p className="text-xs text-slate-500">Belum ada project di materi ini.</p>
                  ) : (
                    <div className="space-y-2.5">
                      {currentMod.projects.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={p.image}
                              alt={p.title}
                              className="h-12 w-16 rounded-xl object-cover border border-slate-200 shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-slate-900 truncate">{p.title}</p>
                              <p className="text-xs text-slate-500 truncate">{p.subtitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() =>
                                setProjForm({
                                  id: p.id,
                                  title: p.title,
                                  subtitle: p.subtitle,
                                  description: p.description,
                                  image: p.image,
                                  downloadUrl: p.downloadUrl || "",
                                  downloadLabel: p.downloadLabel || "",
                                  stlUrl: p.stlUrl || "",
                                  demoUrl: p.demoUrl || "",
                                  tags: p.tags.join(", "),
                                  date: p.date,
                                  featured: Boolean(p.featured),
                                })
                              }
                              className="rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteProject(currentMod.slug, p.id)}
                              className="rounded-lg bg-rose-50 p-1.5 text-rose-600 hover:bg-rose-100 cursor-pointer"
                              title="Hapus project"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add / Edit Project Form */}
                <form
                  onSubmit={handleSaveProject}
                  className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {projForm.id ? "Edit Project" : "Tambah Project Baru"}
                    </h3>
                    {projForm.id && (
                      <button
                        type="button"
                        onClick={() =>
                          setProjForm({
                            id: "",
                            title: "",
                            subtitle: "",
                            description: "",
                            image: "",
                            downloadUrl: "",
                            downloadLabel: "",
                            stlUrl: "",
                            demoUrl: "",
                            tags: "",
                            date: projForm.date,
                            featured: true,
                          })
                        }
                        className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                      >
                        Batal Edit
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Judul Project *">
                      <input
                        required
                        value={projForm.title}
                        onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                        placeholder="Contoh: Robot Line Follower Tiny:bit"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Subjudul Singkat">
                      <input
                        value={projForm.subtitle}
                        onChange={(e) => setProjForm({ ...projForm, subtitle: e.target.value })}
                        placeholder="Contoh: Sensor Garis & Penghindar Rintangan"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="URL / Path Gambar Cover">
                      <input
                        value={projForm.image}
                        onChange={(e) => setProjForm({ ...projForm, image: e.target.value })}
                        placeholder="/assets/... atau https://..."
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Tags (pisahkan koma)">
                      <input
                        value={projForm.tags}
                        onChange={(e) => setProjForm({ ...projForm, tags: e.target.value })}
                        placeholder="Tinybit, Microbit, Robotika"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Link Download File (opsional)">
                      <input
                        value={projForm.downloadUrl}
                        onChange={(e) => setProjForm({ ...projForm, downloadUrl: e.target.value })}
                        placeholder="/assets/scratch/file.sb3 atau Google Drive"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Link Demo / Video / Canva (opsional)">
                      <input
                        value={projForm.demoUrl}
                        onChange={(e) => setProjForm({ ...projForm, demoUrl: e.target.value })}
                        placeholder="https://..."
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="URL File 3D .STL (opsional, untuk 3D Viewer)">
                      <input
                        value={projForm.stlUrl}
                        onChange={(e) => setProjForm({ ...projForm, stlUrl: e.target.value })}
                        placeholder="/assets/tinkercad/model.stl"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Tanggal">
                      <input
                        value={projForm.date}
                        onChange={(e) => setProjForm({ ...projForm, date: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                  </div>

                  <Field label="Deskripsi Project">
                    <textarea
                      rows={3}
                      required
                      value={projForm.description}
                      onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                      placeholder="Jelaskan cara kerja dan hal menarik dari karya ini..."
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </Field>

                  <label className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={projForm.featured}
                      onChange={(e) => setProjForm({ ...projForm, featured: e.target.checked })}
                      className="rounded"
                    />
                    Tampilkan di Karya Unggulan Beranda
                  </label>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      {projForm.id ? "Perbarui Project" : "Simpan Project"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ===== SUBTAB: NOTES ===== */}
            {moduleTab === "notes" && (
              <div className="space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 space-y-3">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Catatan Tersimpan ({currentMod.notes.length})
                  </h3>
                  {currentMod.notes.length === 0 ? (
                    <p className="text-xs text-slate-500">Belum ada catatan di materi ini.</p>
                  ) : (
                    currentMod.notes.map((n) => (
                      <div
                        key={n.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate">{n.title}</p>
                          <p className="text-xs text-slate-500 truncate">{n.summary}</p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() =>
                              setNoteForm({
                                id: n.id,
                                title: n.title,
                                category: n.category,
                                summary: n.summary,
                                content: n.content,
                                shortcutsRaw: (n.shortcuts || [])
                                  .map((s) => `${s.keys} | ${s.action}${s.detail ? ` | ${s.detail}` : ""}`)
                                  .join("\n"),
                                tipsRaw: (n.tips || []).join("\n"),
                              })
                            }
                            className="rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteNote(currentMod.slug, n.id)}
                            className="rounded-lg bg-rose-50 p-1.5 text-rose-600 hover:bg-rose-100 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form
                  onSubmit={handleSaveNote}
                  className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm"
                >
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {noteForm.id ? "Edit Catatan" : "Tambah Catatan / Cheat Sheet Baru"}
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Judul Catatan *">
                      <input
                        required
                        value={noteForm.title}
                        onChange={(e) => setNoteForm({ ...noteForm, title: e.target.value })}
                        placeholder="Contoh: Pin & Sensor Micro:bit"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Kategori">
                      <input
                        value={noteForm.category}
                        onChange={(e) => setNoteForm({ ...noteForm, category: e.target.value })}
                        placeholder="Ringkasan / Shortcut / Troubleshooting"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                  </div>
                  <Field label="Ringkasan 1 Kalimat">
                    <input
                      value={noteForm.summary}
                      onChange={(e) => setNoteForm({ ...noteForm, summary: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </Field>
                  <Field label="Isi Catatan Lengkap *">
                    <textarea
                      required
                      rows={5}
                      value={noteForm.content}
                      onChange={(e) => setNoteForm({ ...noteForm, content: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </Field>
                  <Field label="Shortcut Keyboard (opsional — 1 baris: Tombol | Fungsi | Penjelasan)">
                    <textarea
                      rows={3}
                      value={noteForm.shortcutsRaw}
                      onChange={(e) => setNoteForm({ ...noteForm, shortcutsRaw: e.target.value })}
                      placeholder={"Ctrl + D | Duplicate | Menggandakan objek\nCtrl + G | Group | Menggabungkan objek"}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 font-mono text-xs"
                    />
                  </Field>
                  <Field label="Daftar Tips (opsional — 1 tips per baris)">
                    <textarea
                      rows={3}
                      value={noteForm.tipsRaw}
                      onChange={(e) => setNoteForm({ ...noteForm, tipsRaw: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600 transition cursor-pointer"
                  >
                    <Save className="h-4 w-4" /> Simpan Catatan
                  </button>
                </form>
              </div>
            )}

            {/* ===== SUBTAB: TUTORIALS ===== */}
            {moduleTab === "tutorials" && (
              <div className="space-y-5">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 space-y-3">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Tutorial Tersimpan ({currentMod.tutorials.length})
                  </h3>
                  {currentMod.tutorials.length === 0 ? (
                    <p className="text-xs text-slate-500">Belum ada tutorial di materi ini.</p>
                  ) : (
                    currentMod.tutorials.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate">{t.title}</p>
                          <p className="text-xs text-slate-500">
                            {t.difficulty} • {t.duration} • {t.steps.length} langkah
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() =>
                              setTutForm({
                                id: t.id,
                                title: t.title,
                                subtitle: t.subtitle,
                                difficulty: t.difficulty,
                                duration: t.duration,
                                toolsRaw: t.tools.join(", "),
                                goal: t.goal,
                                downloadUrl: t.downloadUrl || "",
                                downloadLabel: t.downloadLabel || "",
                                steps: t.steps.map((s) => ({
                                  ...s,
                                  image: s.image || "",
                                  tip: s.tip || "",
                                  codeSnippet: s.codeSnippet || "",
                                })),
                              })
                            }
                            className="rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteTutorial(currentMod.slug, t.id)}
                            className="rounded-lg bg-rose-50 p-1.5 text-rose-600 hover:bg-rose-100 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form
                  onSubmit={handleSaveTutorial}
                  className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm"
                >
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {tutForm.id ? "Edit Tutorial" : "Buat Tutorial Step-by-Step Baru"}
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Judul Tutorial *">
                      <input
                        required
                        value={tutForm.title}
                        onChange={(e) => setTutForm({ ...tutForm, title: e.target.value })}
                        placeholder="Contoh: Membuat Aplikasi Quiz di Thunkable"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Subjudul">
                      <input
                        value={tutForm.subtitle}
                        onChange={(e) => setTutForm({ ...tutForm, subtitle: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                    <Field label="Tingkat Kesulitan">
                      <select
                        value={tutForm.difficulty}
                        onChange={(e) =>
                          setTutForm({
                            ...tutForm,
                            difficulty: e.target.value as "Pemula" | "Menengah" | "Lanjutan",
                          })
                        }
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm bg-white"
                      >
                        <option value="Pemula">Pemula</option>
                        <option value="Menengah">Menengah</option>
                        <option value="Lanjutan">Lanjutan</option>
                      </select>
                    </Field>
                    <Field label="Estimasi Durasi">
                      <input
                        value={tutForm.duration}
                        onChange={(e) => setTutForm({ ...tutForm, duration: e.target.value })}
                        placeholder="30 menit"
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                      />
                    </Field>
                  </div>
                  <Field label="Tujuan Belajar">
                    <input
                      value={tutForm.goal}
                      onChange={(e) => setTutForm({ ...tutForm, goal: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </Field>

                  {/* Dynamic Steps */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Langkah-Langkah Tutorial ({tutForm.steps.length})
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setTutForm({
                            ...tutForm,
                            steps: [
                              ...tutForm.steps,
                              {
                                stepNumber: tutForm.steps.length + 1,
                                title: "",
                                description: "",
                                image: "",
                                tip: "",
                                codeSnippet: "",
                              },
                            ],
                          })
                        }
                        className="inline-flex items-center gap-1 rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-bold text-violet-800 hover:bg-violet-200 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" /> Tambah Langkah
                      </button>
                    </div>

                    {tutForm.steps.map((st, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-violet-700">
                            Langkah #{idx + 1}
                          </span>
                          {tutForm.steps.length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                setTutForm({
                                  ...tutForm,
                                  steps: tutForm.steps.filter((_, i) => i !== idx),
                                })
                              }
                              className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                            >
                              Hapus Langkah
                            </button>
                          )}
                        </div>
                        <input
                          value={st.title}
                          onChange={(e) => {
                            const next = [...tutForm.steps];
                            next[idx] = { ...st, title: e.target.value };
                            setTutForm({ ...tutForm, steps: next });
                          }}
                          placeholder="Judul langkah..."
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                        <textarea
                          rows={2}
                          value={st.description}
                          onChange={(e) => {
                            const next = [...tutForm.steps];
                            next[idx] = { ...st, description: e.target.value };
                            setTutForm({ ...tutForm, steps: next });
                          }}
                          placeholder="Penjelasan langkah..."
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <input
                            value={st.image || ""}
                            onChange={(e) => {
                              const next = [...tutForm.steps];
                              next[idx] = { ...st, image: e.target.value };
                              setTutForm({ ...tutForm, steps: next });
                            }}
                            placeholder="Path/URL gambar (opsional)"
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs"
                          />
                          <input
                            value={st.tip || ""}
                            onChange={(e) => {
                              const next = [...tutForm.steps];
                              next[idx] = { ...st, tip: e.target.value };
                              setTutForm({ ...tutForm, steps: next });
                            }}
                            placeholder="Tips singkat (opsional)"
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700 transition cursor-pointer"
                  >
                    <Save className="h-4 w-4" /> Simpan Tutorial
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1">
      <span className="block text-xs font-bold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-sm text-slate-500">
          Memuat Dashboard Admin...
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
