import Link from "next/link";
import { CheckCircle2, Headphones, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import PageShell from "@/components/PageShell";
import CategoryCard from "@/components/CategoryCard";
import { marketplaceCategories, festivalBoxes, futureServices } from "@/components/marketplace-data";

export default function HomePage(){return <PageShell>
<section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153]"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 lg:grid-cols-2"><div><p className="font-bold uppercase tracking-[.2em] text-[#f4c542]">Care beyond distance</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Everything your family needs, <span className="text-[#f4c542]">delivered with care.</span></h1><p className="mt-6 max-w-xl text-xl leading-8 text-white/80">Groceries, medicines, medical equipment, daily pooja essentials and festival care boxes—all in one trusted place.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><Link href="/categories" className="rounded-xl bg-[#f4c542] px-7 py-4 text-center text-lg font-bold text-[#12372c]">Explore Categories</Link><a href="https://wa.me/918904328298" className="rounded-xl border-2 border-white px-7 py-4 text-center text-lg font-bold text-white">Order on WhatsApp</a></div></div><div className="rounded-[2rem] border border-[#f4c542]/30 bg-white/10 p-8 text-white backdrop-blur"><h2 className="text-3xl font-bold text-[#f4c542]">One platform. Many needs.</h2>{["Groceries and medicines","Equipment rental or purchase","Daily pooja essentials","Festival-ready care boxes","Assisted ordering support"].map(x=><p key={x} className="mt-5 flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#9bd65a]"/> {x}</p>)}</div></div></section>
<section className="py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="text-center"><p className="font-bold uppercase tracking-[.2em] text-[#b58510]">Shop by category</p><h2 className="mt-3 text-4xl font-bold text-[#12372c]">Care for everyday life</h2></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{marketplaceCategories.map(c=><CategoryCard key={c.slug} {...c}/>)}</div></div></section>
<section className="bg-[#f4f7ef] py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-bold uppercase tracking-[.2em] text-[#b58510]">Festival care boxes</p><h2 className="mt-3 text-4xl font-bold text-[#12372c]">Celebrate without the last-minute rush</h2></div><Link href="/care-box" className="font-bold text-[#0b5b43]">View all festival boxes →</Link></div><div className="mt-10 grid gap-6 md:grid-cols-3">{festivalBoxes.slice(0,6).map(b=><article key={b.name} className="rounded-3xl bg-white p-6 shadow-sm"><PackageCheck size={36} className="text-[#0b5b43]"/><h3 className="mt-4 text-xl font-bold text-[#12372c]">{b.name}</h3><p className="mt-3 text-gray-600">{b.includes.slice(0,3).join(" • ")}</p><Link href="/care-box" className="mt-5 inline-block font-bold text-[#0b5b43]">See box details →</Link></article>)}</div></div></section>
<section className="py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-center text-4xl font-bold text-[#12372c]">Care services coming soon</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{futureServices.map(s=>{const Icon=s.icon;return <article key={s.name} className="rounded-3xl border border-[#e8dfc5] bg-white p-6"><Icon className="text-[#0b5b43]" size={32}/><h3 className="mt-4 text-xl font-bold">{s.name}</h3><span className="mt-4 inline-block rounded-full bg-[#fff3c4] px-3 py-1 text-sm font-bold text-[#7b5a00]">Coming soon</span></article>})}</div></div></section>
<section className="bg-[#0b4938] py-20 text-white"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-center text-4xl font-bold">Why CareBridge?</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{[[ShieldCheck,"Trusted categories","A carefully structured marketplace for family care needs."],[Truck,"Flexible fulfilment","Delivery support plus rental and purchase enquiries."],[Headphones,"Human assistance","Phone and WhatsApp help for people who prefer assisted ordering."]].map(([I,t,d])=>{const Icon=I as React.ElementType;return <div key={t as string} className="rounded-3xl bg-white/10 p-7 text-center"><Icon className="mx-auto text-[#f4c542]" size={38}/><h3 className="mt-4 text-xl font-bold">{t as string}</h3><p className="mt-2 text-white/75">{d as string}</p></div>})}</div></div></section>
<section className="bg-[#F7F4EC] py-16">
  <div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="rounded-3xl bg-white p-10 shadow-lg">
      <h2 className="text-4xl font-bold text-[#173F35]">
        Not Comfortable Ordering Online?
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Call or WhatsApp our CareBridge team. We'll help you order groceries,
        medicines, medical equipment, pooja essentials and festival care boxes.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/help-ordering"
          className="rounded-xl bg-[#173F35] px-6 py-3 font-semibold text-white"
        >
          Get Ordering Help
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="rounded-xl border border-[#173F35] px-6 py-3 font-semibold text-[#173F35]"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>
</PageShell>}
