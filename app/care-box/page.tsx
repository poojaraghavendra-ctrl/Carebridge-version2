import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PackageOpen,
  Phone,
  Sparkles,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const festivalBoxes = [
  {
    name: "Ganesha Chaturthi Care Box",
    description:
      "A convenient collection of traditional pooja essentials for celebrating Ganesha Chaturthi at home.",
    items: [
      "Turmeric and kumkum",
      "Cotton wicks and camphor",
      "Agarbatti",
      "Betel leaves and betel nuts",
      "Coconut",
      "Pooja thread",
      "Traditional pooja essentials",
      "Optional clay Ganesha idol",
    ],
  },
  {
    name: "Varalakshmi Vratham Care Box",
    description:
      "Thoughtfully assembled essentials for performing Varalakshmi Vratham with devotion and convenience.",
    items: [
      "Turmeric and kumkum",
      "Sacred thread",
      "Bangles",
      "Cotton wicks",
      "Camphor and agarbatti",
      "Betel leaves and betel nuts",
      "Kalasha decoration essentials",
      "Optional return-gift additions",
    ],
  },
  {
    name: "Deepavali Celebration Box",
    description:
      "Traditional pooja and celebration essentials prepared for a joyful Deepavali at home.",
    items: [
      "Decorative diyas",
      "Cotton wicks",
      "Lamp oil",
      "Camphor",
      "Agarbatti",
      "Rangoli colours",
      "Lakshmi pooja essentials",
      "Optional dry-fruit pack",
    ],
  },
  {
    name: "Navaratri Pooja Box",
    description:
      "Daily pooja and traditional essentials for Navaratri celebrations, offerings and family gatherings.",
    items: [
      "Turmeric and kumkum",
      "Cotton wicks",
      "Camphor",
      "Agarbatti",
      "Pooja thread",
      "Decorative items",
      "Offering essentials",
      "Optional return-gift packs",
    ],
  },
  {
    name: "Ugadi Essentials Box",
    description:
      "Celebrate the traditional new year with carefully selected pooja and festive essentials.",
    items: [
      "Turmeric and kumkum",
      "Cotton wicks",
      "Camphor",
      "Agarbatti",
      "Traditional pooja items",
      "Mango-leaf decoration support",
      "Festive grocery essentials",
      "Optional gift additions",
    ],
  },
  {
    name: "Krishna Janmashtami Care Box",
    description:
      "Traditional essentials for Krishna Janmashtami pooja, decoration and family celebrations.",
    items: [
      "Turmeric and kumkum",
      "Cotton wicks",
      "Camphor",
      "Agarbatti",
      "Small decoration items",
      "Pooja thread",
      "Offering essentials",
      "Optional Krishna decoration set",
    ],
  },
  {
    name: "Satyanarayana Pooja Kit",
    description:
      "A convenient set of commonly required essentials for Satyanarayana Pooja at home.",
    items: [
      "Turmeric and kumkum",
      "Cotton wicks",
      "Camphor",
      "Agarbatti",
      "Pooja thread",
      "Betel leaves and betel nuts",
      "Kalasha essentials",
      "Common pooja materials",
    ],
  },
  {
    name: "Ayudha Pooja Care Box",
    description:
      "Essential pooja materials for worshipping vehicles, tools, equipment and workspaces.",
    items: [
      "Turmeric and kumkum",
      "Sandalwood powder",
      "Cotton wicks",
      "Camphor",
      "Agarbatti",
      "Pooja thread",
      "Decorative materials",
      "Vehicle and equipment pooja essentials",
    ],
  },
  {
    name: "Custom Festival Care Box",
    description:
      "Create a personalised care box based on your family tradition, festival and budget.",
    items: [
      "Choose your festival",
      "Select required pooja items",
      "Add groceries or dry fruits",
      "Include return gifts",
      "Add a personalised note",
      "Choose delivery location",
      "Order for loved ones",
      "Assisted ordering available",
    ],
  },
];

const benefits = [
  "Products sourced through trusted suppliers",
  "Competitive wholesale-based pricing",
  "Customisation based on family traditions",
  "Delivery to your home or loved ones",
  "Phone and WhatsApp ordering assistance",
  "Bulk and community orders supported",
];

export default function CareBoxPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
            CareBridge Festival Care
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Celebrate every tradition with everything you need
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Carefully assembled festival and pooja essentials sourced through
            trusted suppliers at competitive prices. Order for your home or
            send a complete care box directly to your loved ones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20enquire%20about%20a%20Festival%20Care%20Box."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>

            <a
              href="tel:+918904328298"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white"
            >
              <Phone size={18} />
              Call CareBridge
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#faf9f6] p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#b68d40]"
                />
                <p className="font-medium leading-6 text-[#173f35]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Boxes */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Festival Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Choose your Festival Care Box
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Every box can be customised depending on availability, family
              traditions, quantity and budget.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {festivalBoxes.map((box) => (
              <article
                key={box.name}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                  <PackageOpen size={27} />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#b68d40]">
                  Festival Care Box
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#173f35]">
                  {box.name}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {box.description}
                </p>

                <div className="mt-6 border-t border-gray-200 pt-5">
                  <p className="font-bold text-[#173f35]">
                    Box may include:
                  </p>

                  <ul className="mt-4 space-y-3">
                    {box.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-[#b68d40]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <a
                    href={`https://wa.me/918904328298?text=${encodeURIComponent(
                      `Hello CareBridge, I would like to enquire about the ${box.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f35] px-5 py-3 font-semibold text-white transition hover:bg-[#245b4c]"
                  >
                    Enquire Now
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Box */}
      <section className="bg-[#f4ebdd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                <Sparkles size={27} />
              </div>

              <p className="mt-6 font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Personalised Care
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Need a customised festival box?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Share your festival, family tradition, required items, budget
                and delivery location. Our team will help create a suitable care
                box for you.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20create%20a%20customised%20Festival%20Care%20Box."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle size={18} />
                  Create My Care Box
                </a>

                <Link
                  href="/help-ordering"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
                >
                  Get Ordering Help
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#f4f7ef] p-7">
              <h3 className="text-xl font-bold text-[#173f35]">
                Tell us these details
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Festival or pooja name",
                  "Required date",
                  "Delivery location",
                  "Number of boxes",
                  "Preferred items",
                  "Approximate budget",
                  "Any special family tradition",
                  "Personal message for loved ones",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#b68d40]"
                    />
                    <span className="font-medium text-[#173f35]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Message */}
      <section className="bg-[#0b4938] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            Trusted Value
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Quality festival essentials at competitive prices
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            We source through trusted wholesale partners and suppliers. Final
            pricing depends on selected items, quantity, customisation,
            availability and delivery location.
          </p>

          <a
            href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20please%20share%20Festival%20Care%20Box%20options%20and%20pricing."
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
          >
            Request Box Options
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
