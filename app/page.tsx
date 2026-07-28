import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  HeartHandshake,
  MessageCircle,
  Search,
} from "lucide-react";

import PageShell from "@/components/PageShell";
import CategoryCard from "@/components/CategoryCard";
import {
  marketplaceCategories,
  festivalBoxes,
} from "@/components/marketplace-data";

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
              The CareBridge
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Everything your family needs, all in one place
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Groceries, medicines, medical equipment, daily pooja essentials,
              festival care boxes and personalised ordering assistance for
              families and loved ones.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
              >
                Explore Categories
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/help-ordering"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white"
              >
                <CircleHelp size={18} />
                Get Ordering Help
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
            <div className="rounded-2xl bg-white p-5 text-[#173f35]">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                <Search size={20} className="text-gray-400" />
                <span className="text-gray-500">
                  Search groceries, medicines, equipment and more
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Groceries",
                  "Medicines",
                  "Medical Equipment",
                  "Pooja Essentials",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#f4f7ef] p-4 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
  <div className="mx-auto max-w-7xl px-5 md:px-8">
    <div className="text-center">
      <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
        Why Choose CareBridge
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
        Better value, trusted quality and personal care
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
        We work with trusted wholesale dealers, verified suppliers and
        authorized distributors to bring families quality essentials at
        competitive prices.
      </p>
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: "₹",
          title: "Competitive Wholesale Pricing",
          text: "We source through trusted wholesale partners and pass better value on to our customers.",
        },
        {
          icon: "✓",
          title: "Trusted Quality",
          text: "Products are sourced from reliable suppliers and authorized distributors wherever applicable.",
        },
        {
          icon: "▣",
          title: "Everything in One Place",
          text: "Groceries, medicines, medical equipment, wellness products, pooja essentials and festival boxes.",
        },
        {
          icon: "☎",
          title: "Assisted Ordering",
          text: "Customers can call or WhatsApp us and receive personal help placing their order.",
        },
        {
          icon: "⌂",
          title: "Delivery to Loved Ones",
          text: "Arrange essentials for parents, relatives or family members even when you live far away.",
        },
        {
          icon: "♥",
          title: "Care Beyond Shopping",
          text: "We focus on making everyday family care easier, more affordable and more dependable.",
        },
      ].map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-gray-200 bg-[#faf9f6] p-7 shadow-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4ebdd] text-xl font-bold text-[#173f35]">
            {item.icon}
          </div>

          <h3 className="mt-5 text-xl font-bold text-[#173f35]">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
        </article>
      ))}
    </div>

    <div className="mt-12 rounded-3xl bg-[#0b4938] p-8 text-white md:p-12">
      <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            Our Promise
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Quality essentials at prices families can trust
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            CareBridge combines wholesale sourcing, trusted suppliers, personal
            ordering assistance and convenient delivery to give families
            dependable value across everyday care needs.
          </p>
        </div>

        <div className="grid gap-3">
          {[
            "Trusted wholesale sourcing",
            "Competitive pricing",
            "Verified suppliers",
            "Personal ordering support",
            "Convenient family delivery",
          ].map((promise) => (
            <div
              key={promise}
              className="rounded-xl bg-white/10 px-4 py-3 font-medium"
            >
              ✓ {promise}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#faf9f6] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Marketplace
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Shop by Category
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore essential products and services designed to make everyday
              care easier for families.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketplaceCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebdd] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Personal Assistance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Not Comfortable Ordering Online?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Call or WhatsApp our CareBridge team. We will help you place
                orders for groceries, medicines, medical equipment, pooja
                essentials and festival care boxes.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/help-ordering"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
                >
                  <HeartHandshake size={18} />
                  Get Ordering Help
                </Link>

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Phone Ordering",
                "WhatsApp Assistance",
                "Order for Loved Ones",
                "Repeat Monthly Orders",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f4f7ef] p-5 font-semibold text-[#173f35]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Festival Care
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Festival Care Boxes
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600">
                Thoughtfully prepared festival essentials delivered to your
                family or loved ones.
              </p>
            </div>

            <Link
              href="/care-box"
              className="font-semibold text-[#173f35] underline"
            >
              View all care boxes
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {festivalBoxes.slice(0, 6).map((box) => (
              <article
                key={box.slug}
                className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[#b68d40]">
                  Festival Box
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#173f35]">
                  {box.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {box.description}
                </p>

                <Link
                  href="/care-box"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173f35]"
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b4938] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            Why CareBridge
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Care made simple, reliable and personal
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Human Assistance",
                text: "Real people available to help families place and manage orders.",
              },
              {
                title: "Essential Categories",
                text: "Everyday needs, healthcare essentials and cultural requirements in one place.",
              },
              {
                title: "Built for Families",
                text: "Order for yourself, parents, relatives or loved ones from anywhere.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/10 p-6 text-left"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
