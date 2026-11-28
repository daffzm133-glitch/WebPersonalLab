"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  collection,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase";
import { SEED_DATA } from "@/data/seedData";
import type {
  LearningModule,
  ModuleStatus,
  NoteItem,
  PortfolioData,
  PortfolioProfile,
  ProjectItem,
  TutorialItem,
} from "@/types/curriculum";

const LOCAL_STORAGE_KEY = "daffa_steam_lab_v1";
const SEED_REV_KEY = "daffa_steam_lab_seed_rev";
const CURRENT_SEED_REV = "2026-11-28-portfolio-glass-scroll-v23";
const REMOVED_SLUGS = new Set(["minecraft-education", "video-editing-capcut"]);
const SYNCED_SLUGS = new Set([
  "lego-wedo-education",
  "tinkercad-3d-design",
  "scratch-game-coding",
  "webar-augmented-reality",
  "robotic-tinybit",
  "iot-microbit",
  "ai-pictoblox-microbit",
  "roblox-game-coding",
  "design-canva",
  "android-thunkable",
]);
const DEMO_AUTH_KEY = "daffa_steam_demo_admin";

interface PortfolioContextValue {
  data: PortfolioData;
  loading: boolean;
  syncing: boolean;
  firebaseReady: boolean;
  firebaseHasData: boolean;
  user: User | null;
  isDemoAdmin: boolean;
  isAdmin: boolean;
  toast: string | null;
  showToast: (msg: string) => void;
  loginFirebase: (email: string, password: string) => Promise<void>;
  loginDemo: () => void;
  logout: () => Promise<void>;
  updateProfile: (profile: PortfolioProfile) => Promise<void>;
  updateModuleStatus: (slug: string, status: ModuleStatus) => Promise<void>;
  updateModuleMeta: (
    slug: string,
    updates: Partial<Pick<LearningModule, "tagline" | "summary" | "tools" | "status">>
  ) => Promise<void>;
  saveProject: (slug: string, project: ProjectItem) => Promise<void>;
  deleteProject: (slug: string, projectId: string) => Promise<void>;
  saveNote: (slug: string, note: NoteItem) => Promise<void>;
  deleteNote: (slug: string, noteId: string) => Promise<void>;
  saveTutorial: (slug: string, tutorial: TutorialItem) => Promise<void>;
  deleteTutorial: (slug: string, tutorialId: string) => Promise<void>;
  seedToFirestore: () => Promise<void>;
  resetToSeed: () => Promise<void>;
  importJsonData: (parsed: PortfolioData) => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(SEED_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [firebaseHasData, setFirebaseHasData] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isDemoAdmin, setIsDemoAdmin] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? null : prev));
    }, 3200);
  }, []);

  // Auth listener
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
      });
      return () => unsub();
    } else if (typeof window !== "undefined") {
      setIsDemoAdmin(sessionStorage.getItem(DEMO_AUTH_KEY) === "1");
    }
  }, []);

  // Load initial data from Firestore or localStorage
  useEffect(() => {
    let active = true;

    async function load() {
      try {
        if (isFirebaseConfigured && db) {
          const profileSnap = await getDoc(doc(db, "smsit_portfolio", "profile"));
          const modulesSnap = await getDocs(collection(db, "smsit_modules"));

          if (!active) return;

          if (profileSnap.exists() || !modulesSnap.empty) {
            setFirebaseHasData(true);
            const loadedProfile = profileSnap.exists()
              ? (profileSnap.data() as PortfolioProfile)
              : SEED_DATA.profile;

            const modMap = new Map<string, LearningModule>();
            SEED_DATA.modules.forEach((m) => modMap.set(m.slug, m));
            modulesSnap.forEach((d) => {
              const mod = d.data() as LearningModule;
              if (
                !REMOVED_SLUGS.has(mod.slug) &&
                !SYNCED_SLUGS.has(mod.slug) &&
                modMap.has(mod.slug)
              ) {
                const seedOrder = modMap.get(mod.slug)!.order;
                modMap.set(mod.slug, { ...mod, order: seedOrder });
              }
            });

            const sortedModules = Array.from(modMap.values()).sort(
              (a, b) => a.order - b.order
            );

            setData({
              profile: loadedProfile,
              modules: sortedModules,
              updatedAt: new Date().toISOString(),
            });
          } else {
            setFirebaseHasData(false);
            setData(SEED_DATA);
          }
        } else if (typeof window !== "undefined") {
          const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
          const savedRev = localStorage.getItem(SEED_REV_KEY);
          if (raw) {
            const parsed = JSON.parse(raw) as PortfolioData;
            if (Array.isArray(parsed?.modules) && parsed?.profile) {
              if (savedRev !== CURRENT_SEED_REV || parsed.modules.length !== SEED_DATA.modules.length) {
                const seedBySlug = new Map(SEED_DATA.modules.map((m) => [m.slug, m]));
                const parsedBySlug = new Map(
                  parsed.modules
                    .filter((m) => !REMOVED_SLUGS.has(m.slug))
                    .map((m) => [m.slug, m])
                );
                const mergedModules = SEED_DATA.modules
                  .map((seedMod) => {
                    if (SYNCED_SLUGS.has(seedMod.slug) || !parsedBySlug.has(seedMod.slug)) {
                      return seedMod;
                    }
                    return {
                      ...parsedBySlug.get(seedMod.slug)!,
                      order: seedMod.order,
                    };
                  })
                  .sort((a, b) => a.order - b.order);

                const merged: PortfolioData = {
                  ...parsed,
                  profile: {
                    ...SEED_DATA.profile,
                    avatar: parsed.profile.avatar || SEED_DATA.profile.avatar,
                  },
                  modules: mergedModules,
                  updatedAt: SEED_DATA.updatedAt,
                };
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(merged));
                localStorage.setItem(SEED_REV_KEY, CURRENT_SEED_REV);
                setData(merged);
              } else {
                setData(parsed);
              }
            }
          } else {
            localStorage.setItem(SEED_REV_KEY, CURRENT_SEED_REV);
          }
        }
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  const persistLocal = useCallback((next: PortfolioData) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn("LocalStorage penuh:", err);
      }
    }
  }, []);

  const persistModuleToCloud = useCallback(async (mod: LearningModule) => {
    if (isFirebaseConfigured && db) {
      setSyncing(true);
      try {
        await setDoc(doc(db, "smsit_modules", mod.slug), mod);
        setFirebaseHasData(true);
      } finally {
        setSyncing(false);
      }
    }
  }, []);

  const updateProfile = useCallback(
    async (profile: PortfolioProfile) => {
      const next: PortfolioData = {
        ...data,
        profile,
        updatedAt: new Date().toISOString(),
      };
      setData(next);
      persistLocal(next);
      if (isFirebaseConfigured && db) {
        setSyncing(true);
        try {
          await setDoc(doc(db, "smsit_portfolio", "profile"), profile);
          setFirebaseHasData(true);
        } finally {
          setSyncing(false);
        }
      }
      showToast("Profil portofolio berhasil disimpan!");
    },
    [data, persistLocal, showToast]
  );

  const mutateModule = useCallback(
    async (slug: string, updater: (mod: LearningModule) => LearningModule, message: string) => {
      let updatedMod: LearningModule | null = null;
      const nextModules = data.modules.map((m) => {
        if (m.slug !== slug) return m;
        updatedMod = updater(m);
        return updatedMod;
      });
      if (!updatedMod) return;

      const next: PortfolioData = {
        ...data,
        modules: nextModules,
        updatedAt: new Date().toISOString(),
      };
      setData(next);
      persistLocal(next);
      await persistModuleToCloud(updatedMod);
      showToast(message);
    },
    [data, persistLocal, persistModuleToCloud, showToast]
  );

  const updateModuleStatus = useCallback(
    async (slug: string, status: ModuleStatus) => {
      await mutateModule(slug, (m) => ({ ...m, status }), "Status materi diperbarui!");
    },
    [mutateModule]
  );

  const updateModuleMeta = useCallback(
    async (
      slug: string,
      updates: Partial<Pick<LearningModule, "tagline" | "summary" | "tools" | "status">>
    ) => {
      await mutateModule(slug, (m) => ({ ...m, ...updates }), "Detail materi diperbarui!");
    },
    [mutateModule]
  );

  const saveProject = useCallback(
    async (slug: string, project: ProjectItem) => {
      await mutateModule(
        slug,
        (m) => {
          const exists = m.projects.some((p) => p.id === project.id);
          return {
            ...m,
            projects: exists
              ? m.projects.map((p) => (p.id === project.id ? project : p))
              : [project, ...m.projects],
          };
        },
        "Project berhasil disimpan!"
      );
    },
    [mutateModule]
  );

  const deleteProject = useCallback(
    async (slug: string, projectId: string) => {
      await mutateModule(
        slug,
        (m) => ({
          ...m,
          projects: m.projects.filter((p) => p.id !== projectId),
        }),
        "Project dihapus."
      );
    },
    [mutateModule]
  );

  const saveNote = useCallback(
    async (slug: string, note: NoteItem) => {
      await mutateModule(
        slug,
        (m) => {
          const exists = m.notes.some((n) => n.id === note.id);
          return {
            ...m,
            notes: exists
              ? m.notes.map((n) => (n.id === note.id ? note : n))
              : [note, ...m.notes],
          };
        },
        "Catatan berhasil disimpan!"
      );
    },
    [mutateModule]
  );

  const deleteNote = useCallback(
    async (slug: string, noteId: string) => {
      await mutateModule(
        slug,
        (m) => ({
          ...m,
          notes: m.notes.filter((n) => n.id !== noteId),
        }),
        "Catatan dihapus."
      );
    },
    [mutateModule]
  );

  const saveTutorial = useCallback(
    async (slug: string, tutorial: TutorialItem) => {
      await mutateModule(
        slug,
        (m) => {
          const exists = m.tutorials.some((t) => t.id === tutorial.id);
          return {
            ...m,
            tutorials: exists
              ? m.tutorials.map((t) => (t.id === tutorial.id ? tutorial : t))
              : [tutorial, ...m.tutorials],
          };
        },
        "Tutorial berhasil disimpan!"
      );
    },
    [mutateModule]
  );

  const deleteTutorial = useCallback(
    async (slug: string, tutorialId: string) => {
      await mutateModule(
        slug,
        (m) => ({
          ...m,
          tutorials: m.tutorials.filter((t) => t.id !== tutorialId),
        }),
        "Tutorial dihapus."
      );
    },
    [mutateModule]
  );

  const seedToFirestore = useCallback(async () => {
    if (!isFirebaseConfigured || !db) {
      showToast("Isi .env.local dengan Firebase config terlebih dahulu.");
      return;
    }
    setSyncing(true);
    try {
      const batch = writeBatch(db);
      batch.set(doc(db, "smsit_portfolio", "profile"), data.profile);
      data.modules.forEach((mod) => {
        batch.set(doc(db!, "smsit_modules", mod.slug), mod);
      });
      REMOVED_SLUGS.forEach((removedSlug) => {
        batch.delete(doc(db!, "smsit_modules", removedSlug));
      });
      await batch.commit();
      setFirebaseHasData(true);
      showToast(`Semua ${data.modules.length} materi & profil berhasil disinkronkan ke Firestore!`);
    } finally {
      setSyncing(false);
    }
  }, [data, showToast]);

  const resetToSeed = useCallback(async () => {
    setData(SEED_DATA);
    persistLocal(SEED_DATA);
    showToast("Data lokal dikembalikan ke data awal pelatihan.");
  }, [persistLocal, showToast]);

  const importJsonData = useCallback(
    async (parsed: PortfolioData) => {
      setData(parsed);
      persistLocal(parsed);
      if (isFirebaseConfigured && db) {
        setSyncing(true);
        try {
          const batch = writeBatch(db);
          batch.set(doc(db, "smsit_portfolio", "profile"), parsed.profile);
          parsed.modules.forEach((mod) => {
            batch.set(doc(db!, "smsit_modules", mod.slug), mod);
          });
          await batch.commit();
          setFirebaseHasData(true);
        } finally {
          setSyncing(false);
        }
      }
      showToast("Backup JSON berhasil diimpor!");
    },
    [persistLocal, showToast]
  );

  const loginFirebase = useCallback(async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase Auth belum dikonfigurasi.");
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const loginDemo = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DEMO_AUTH_KEY, "1");
    }
    setIsDemoAdmin(true);
    showToast("Masuk sebagai Admin (Mode Lokal / Demo).");
  }, [showToast]);

  const logout = useCallback(async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(DEMO_AUTH_KEY);
    }
    setIsDemoAdmin(false);
    showToast("Berhasil keluar dari mode Admin.");
  }, [showToast]);

  const isAdmin = isFirebaseConfigured ? Boolean(user) : isDemoAdmin;

  return (
    <PortfolioContext.Provider
      value={{
        data,
        loading,
        syncing,
        firebaseReady: isFirebaseConfigured,
        firebaseHasData,
        user,
        isDemoAdmin,
        isAdmin,
        toast,
        showToast,
        loginFirebase,
        loginDemo,
        logout,
        updateProfile,
        updateModuleStatus,
        updateModuleMeta,
        saveProject,
        deleteProject,
        saveNote,
        deleteNote,
        saveTutorial,
        deleteTutorial,
        seedToFirestore,
        resetToSeed,
        importJsonData,
      }}
    >
      {children}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce-once rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-2xl border border-slate-700 flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          {toast}
        </div>
      )}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio harus digunakan di dalam PortfolioProvider");
  }
  return ctx;
}
