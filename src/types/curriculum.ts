export type DayNumber = 1 | 2 | 3 | 4;

export type ModuleStatus = "completed" | "in-progress" | "upcoming";

export type AccentColor = "emerald" | "sky" | "violet" | "amber";

export interface ShortcutItem {
  keys: string;
  action: string;
  detail?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gallery?: { src: string; caption: string }[];
  tags: string[];
  downloadUrl?: string;
  downloadLabel?: string;
  stlUrl?: string;
  demoUrl?: string;
  date: string;
  featured?: boolean;
}

export interface NoteItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  shortcuts?: ShortcutItem[];
  tips?: string[];
  updatedAt: string;
}

export interface TutorialStep {
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
  tip?: string;
  codeSnippet?: string;
}

export interface TutorialItem {
  id: string;
  title: string;
  subtitle: string;
  difficulty: "Pemula" | "Menengah" | "Lanjutan";
  duration: string;
  tools: string[];
  goal: string;
  steps: TutorialStep[];
  downloadUrl?: string;
  downloadLabel?: string;
}

export interface LearningModule {
  slug: string;
  day: DayNumber;
  order: number;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  summary: string;
  learningGoals: string[];
  status: ModuleStatus;
  accentColor: AccentColor;
  iconName:
    | "bot"
    | "box"
    | "gamepad"
    | "cpu"
    | "wifi"
    | "blocks"
    | "sparkles"
    | "brain"
    | "joystick"
    | "palette"
    | "video"
    | "smartphone";
  tools: string[];
  projects: ProjectItem[];
  notes: NoteItem[];
  tutorials: TutorialItem[];
}

export interface PortfolioProfile {
  name: string;
  displayName: string;
  siteTitle: string;
  role: string;
  programName: string;
  year: string;
  bio: string;
  mission: string;
  email: string;
  github: string;
  instagram: string;
  skills: string[];
}

export interface PortfolioData {
  profile: PortfolioProfile;
  modules: LearningModule[];
  updatedAt: string;
}

export interface DayMeta {
  day: DayNumber;
  label: string;
  themeTitle: string;
  description: string;
  accentColor: AccentColor;
}
