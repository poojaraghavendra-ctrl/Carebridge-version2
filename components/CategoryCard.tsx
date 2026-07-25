import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export default function CategoryCard({ name, description, slug, icon: Icon, accent }: { name: string; description: string; slug: string; icon: LucideIcon; accent: string }) {
  return <Link href={`/${slug}`} className={`group rounded-3xl border border-[#e8dfc5] ${accent} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}>
    <div className="inline-flex rounded-2xl bg-white p-3 text-[#0b5b43] shadow-sm"><Icon size={30}/></div>
    <h3 className="mt-5 text-xl font-bold text-[#12372c]">{name}</h3>
    <p className="mt-2 leading-6 text-gray-600">{description}</p>
    <span className="mt-5 inline-block font-bold text-[#0b5b43]">Explore category →</span>
  </Link>
}
