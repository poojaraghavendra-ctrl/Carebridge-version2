import PageShell from "./PageShell";

export default function SectionPage({ eyebrow, title, intro, items }: { eyebrow: string; title: string; intro: string; items: string[] }) {
  return <PageShell>
    <section className="bg-[#0b4938] py-16 text-white"><div className="mx-auto max-w-6xl px-5 md:px-8"><p className="font-bold uppercase tracking-[.2em] text-[#f4c542]">{eyebrow}</p><h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{intro}</p></div></section>
    <section className="py-16"><div className="mx-auto max-w-6xl px-5 md:px-8"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(item=><article key={item} className="rounded-3xl border border-[#e8dfc5] bg-white p-6 shadow-sm"><div className="h-2 w-14 rounded-full bg-[#f4c542]"/><h2 className="mt-5 text-xl font-bold text-[#12372c]">{item}</h2><p className="mt-2 text-gray-600">Enquire for availability and assisted ordering.</p><a href="https://wa.me/918904328298" className="mt-5 inline-block font-bold text-[#0b5b43]">Enquire on WhatsApp →</a></article>)}</div></div></section>
  </PageShell>
}
