import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  House,
  PackageOpen,
  Pill,
  ShoppingBasket,
  Sparkles,
  Stethoscope,
  Wheelchair,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const categories = [
  {
    name: "Groceries",
    description:
      "Rice, pulses, cooking oils, spices, beverages and everyday household provisions.",
    href: "/groceries",
    icon: ShoppingBasket,
    items: ["Rice & grains", "Pulses", "Cooking essentials", "Dry fruits"],
  },
  {
    name: "Medicines",
    description:
      "Prescription support, OTC products, vitamins, Ayurveda and regular medicine requirements.",
    href: "/medicines",
    icon: Pill,
    items: ["Prescription support", "OTC medicines", "Vitamins", "Ayurveda"],
  },
  {
    name: "Medical Equipment",
    description:
      "Healthcare and recovery equipment available for purchase or enquiry.",
    href: "/medical-equipment",
    icon: Stethoscope,
    items: ["BP monitors", "Nebulizers", "Glucometers", "Hospital equipment"],
  },
  {
    name: "Equipment Rentals",
    description:
      "Flexible rental assistance for hospital beds, wheelchairs, oxygen concentrators and more.",
    href: "/rentals",
    icon: Wheelchair,
    items: ["Hospital beds", "Wheelchairs", "Oxygen concentrators", "Air mattresses"],
  },
  {
    name: "Daily Pooja Essentials",
    description:
      "Convenient access to everyday pooja items and traditional worship essentials.",
    href: "/pooja",
    icon: Sparkles,
    items: ["Camphor", "Cotton wicks", "Kumkum", "Agarbatti"],
  },
  {
    name: "Festival Care Boxes",
    description:
      "Thoughtfully assembled festival and vratha boxes delivered to your family.",
    href: "/care-box",
    icon: PackageOpen,
    items: ["Ganesha Chaturthi", "Varalakshmi Vratham", "Deepavali", "Navaratri"],
  },
  {
    name: "Health & Wellness",
    description:
      "Nutrition, monitoring, personal care and recovery support for everyday wellbeing.",
    href: "/wellness",
    icon: HeartPulse,
    items: ["Nutrition", "Personal care", "Monitoring", "Recovery support"],
  },
  {
    name: "Home Care",
    description:
      "Comfort, hygiene, safety and daily-living products for individuals and families.",
    href: "/home-care",
    icon: House,
    items: ["Hygiene", "Home safety", "Daily living", "Comfort products"],
  },
];

export default function CategoriesPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            CareBridge Marketplace
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Essential categories for everyday care
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Explore groceries, medicines, medical equipment, pooja essentials,
            festival boxes and home-care support in one trusted place.
          </p>
        </div>
      </section>

      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.name}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                      <Icon size={27} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#173f35]">
                        {category.name}
                      </h2>

                      <p className="mt-3 leading-7 text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-[#f4f7ef] px-4 py-3 text-sm font-medium text-[#173f35]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={category.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#173f35]"
                  >
                    Explore category
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebdd] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Assisted Ordering
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35]">
              Unsure which category to choose?
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Tell us what you need. Our CareBridge team can guide you through
              products, rentals, festival boxes and repeat orders.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/help-ordering"
                className="rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
              >
                Get Ordering Help
              </Link>

              <a
                href="https://wa.me/918904328298"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
              >
                WhatsApp CareBridge
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
