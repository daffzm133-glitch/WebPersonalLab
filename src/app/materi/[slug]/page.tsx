import { SEED_DATA } from "@/data/seedData";
import { ModuleDetailClient } from "@/components/ModuleDetailClient";

export function generateStaticParams() {
  return SEED_DATA.modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = SEED_DATA.modules.find((m) => m.slug === slug);
  if (!mod) return { title: "Materi Tidak Ditemukan" };
  return {
    title: `${mod.title} (Hari Ke-${mod.day}) — ${SEED_DATA.profile.siteTitle}`,
    description: mod.tagline,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ModuleDetailClient slug={slug} />;
}
