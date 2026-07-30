import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  CircleHelp,
  Clock3,
  HeartHandshake,
  HeartPulse,
  Home,
  Mail,
  MessageCircle,
  PackageCheck,
  PackageOpen,
  Phone,
  Pill,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Stethoscope,
  Truck,
  Users,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const categories = [
  {
    name: "Groceries",
    description:
      "Rice, pulses, oils, spices, dry fruits and everyday household essentials.",
    href: "/groceries",
    icon: ShoppingBasket,
  },
  {
    name: "Medicines",
    description:
      "Prescription support, OTC products, vitamins and regular medicine needs.",
    href: "/medicines",
    icon: Pill,
  },
  {
    name: "Medical Equipment",
    description:
      "HeartPulse, walkers, monitoring devices and recovery equipment.",
    href: "/medical-equipment",
    icon: Stethoscope,
  },
  {
    name: "Equipment Rentals",
    description:
      "Hospital beds, oxygen concentrators and patient-care rentals.",
    href: "/rentals",
    icon: Heartpulse,
  },
  {
    name: "Health & Wellness",
    description:
      "Nutrition, personal care, monitoring and recovery-support products.",
    href: "/wellness",
    icon: HeartPulse,
  },
  {
    name: "Home Care",
    description:
      "Daily-living, hygiene, comfort and home-safety essentials.",
    href: "/home-care",
    icon: Home,
  },
  {
    name: "Daily Pooja Essentials",
    description:
      "Camphor, cotton wicks, kumkum, turmeric, agarbatti and traditional items.",
    href: "/pooja",
    icon: Sparkles,
  },
  {
    name: "Festival Care Boxes",
    description:
      "Complete festival and vratha essentials thoughtfully packed together.",
    href: "/care-box",
    icon: PackageOpen,
  },
];

const advantages = [
  {
    title: "Competitive Wholesale Pricing",
    description:
      "We source through trusted wholesale partners and pass dependable value on to customers.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Trusted Supplier Network",
    description:
      "We work with reliable wholesale dealers, verified suppliers and authorized distributors.",
    icon: ShieldCheck,
  },
  {
    title: "Everything in One Place",
    description:
      "Groceries, medicines, equipment, wellness, pooja essentials and festival boxes.",
    icon: PackageCheck,
  },
  {
    title: "Personal Ordering Assistance",
    description:
      "Customers can call or WhatsApp us and receive help from start to finish.",
    icon: HeartHandshake,
  },
  {
    title: "Delivery to Loved Ones",
    description:
      "Arrange essential products for parents, relatives and family members from anywhere.",
    icon: Truck,
  },
  {
    title: "Care Beyond Shopping",
    description:
      "We focus on making family care simpler, more affordable and more dependable.",
    icon: Users,
  },
];

const festivalBoxes = [
  {
    name: "Ganesha Chaturthi Care Box",
    description:
      "Essential pooja materials for celebrating Ganesha Chaturthi with convenience and devotion.",
  },
  {
    name: "Varalakshmi Vratham Care Box",
    description:
      "A thoughtfully assembled collection of traditional vratha and pooja essentials.",
  },
  {
    name: "Deepavali Celebration Box",
    description:
      "Diyas, pooja essentials and festive items prepared for a joyful Deepavali celebration.",
  },
  {
    name: "Navaratri Pooja Box",
    description:
      "Traditional essentials for Navaratri pooja, daily offerings and family celebrations.",
  },
  {
    name: "Ugadi Essentials Box",
    description:
      "Celebrate the new year with carefully selected traditional and pooja essentials.",
  },
  {
    name: "Satyanarayana Pooja Kit",
    description:
      "A convenient collection of commonly required items for Satyanarayana Pooja.",
  },
];

const services = [
  "Doctor Consultation",
  "Home Nursing",
  "Lab Tests",
  "Physiotherapy",
  "Ambulance Support",
  "SOS Devices",
];

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
              The CareBridge
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Everything your family needs, delivered with care
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Quality products sourced from trusted wholesale partners at
              competitive prices. From groceries and medicines to medical
              equipment and festival essentials, CareBridge makes caring for
              your loved ones simple, affordable and reliable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35] transition hover:bg-[#ead7a7]"
              >
                Explore Categories
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/help-ordering"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <CircleHelp size={18} />
                Get Ordering Help
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Competitive wholesale pricing",
                "Trusted supplier network",
                "Personal ordering assistance",
                "Everything in one place",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur"
                >
                  <CheckCircle2 size={18} className="text-[#e2c98a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur md:p-7">
            <div className="rounded-2xl bg-white p-5 text-[#173f35] md:p-6">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-4">
                <Search size={20} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-500 md:text-base">
                  Search groceries, medicines, equipment and more
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#b68d40]">
                Popular Categories
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { name: "Groceries", icon: ShoppingBasket },
                  { name: "Medicines", icon: Pill },
                  { name: "Equipment", icon: Stethoscope },
                  { name: "Festival Boxes", icon: PackageOpen },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="rounded-2xl bg-[#f4f7ef] p-4"
                    >
                      <Icon size={23} className="text-[#173f35]" />
                      <p className="mt-3 text-sm font-semibold">{item.name}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-[#f4ebdd] p-4">
                <p className="font-semibold text-[#173f35]">
                  Not comfortable ordering online?
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Call or WhatsApp our team and we will help place your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CareBridge */}
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
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-[#faf9f6] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#173f35]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                CareBridge Marketplace
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Shop by Category
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Find everyday essentials, healthcare products and traditional
                requirements through one trusted platform.
              </p>
            </div>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 font-semibold text-[#173f35]"
            >
              View all categories
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35] transition group-hover:bg-[#173f35] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#173f35]">
                    {category.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173f35]">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assisted Ordering */}
      <section className="bg-[#f4ebdd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Personal Assistance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Not comfortable ordering online?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Call or WhatsApp the CareBridge team. We will help you place
                orders for groceries, medicines, medical equipment, pooja
                essentials, festival boxes and repeat monthly requirements.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/help-ordering"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white transition hover:bg-[#245b4c]"
                >
                  <HeartHandshake size={18} />
                  Get Ordering Help
                </Link>

                <a
                  href="https://wa.me/918904328298"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35] transition hover:bg-[#f4f7ef]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Phone Ordering",
                  description: "Speak directly with our support team.",
                  icon: Phone,
                },
                {
                  title: "WhatsApp Assistance",
                  description: "Share your list quickly and conveniently.",
                  icon: MessageCircle,
                },
                {
                  title: "Order for Loved Ones",
                  description: "Arrange essentials for family from anywhere.",
                  icon: Users,
                },
                {
                  title: "Repeat Monthly Orders",
                  description: "Get help with recurring household requirements.",
                  icon: Clock3,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#f4f7ef] p-5"
                  >
                    <Icon size={24} className="text-[#173f35]" />
                    <h3 className="mt-4 font-bold text-[#173f35]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Simple Ordering
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              How CareBridge works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Tell us what you need",
                description:
                  "Browse categories or contact us with your product list and requirements.",
              },
              {
                number: "02",
                title: "We source trusted products",
                description:
                  "Our team coordinates with reliable wholesale dealers and verified suppliers.",
              },
              {
                number: "03",
                title: "Receive your order",
                description:
                  "Your selected essentials are arranged and delivered with personal support.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-[#faf9f6] p-7"
              >
                <span className="text-4xl font-bold text-[#d5bd80]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#173f35]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Boxes */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Festival Care
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Festival Care Boxes
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Thoughtfully assembled traditional essentials delivered to your
                home or directly to your loved ones.
              </p>
            </div>

            <Link
              href="/care-box"
              className="inline-flex items-center gap-2 font-semibold text-[#173f35]"
            >
              View all care boxes
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {festivalBoxes.map((box) => (
              <article
                key={box.name}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                  <PackageOpen size={25} />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#b68d40]">
                  Festival Box
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#173f35]">
                  {box.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {box.description}
                </p>

                <Link
                  href="/care-box"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#173f35]"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-[#0b4938] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
                Our Promise
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Quality essentials at prices families can trust
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                CareBridge combines wholesale sourcing, trusted suppliers,
                personal ordering assistance and convenient delivery to provide
                dependable value across everyday family-care requirements.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Trusted wholesale sourcing",
                "Competitive and transparent value",
                "Reliable supplier network",
                "Personal ordering support",
                "Convenient family delivery",
              ].map((promise) => (
                <div
                  key={promise}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-4 font-medium"
                >
                  <CheckCircle2 size={19} className="text-[#e2c98a]" />
                  {promise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Coming Soon
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              More care services, one trusted platform
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              We are working to expand CareBridge with healthcare, home-care
              and emergency-support services.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-[#faf9f6] p-5"
              >
                <span className="font-semibold text-[#173f35]">{service}</span>
                <span className="rounded-full bg-[#f4ebdd] px-3 py-1 text-xs font-semibold text-[#8a672f]">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f4ebdd] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Need Help?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Let us help you place your order
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Contact the CareBridge team for groceries, medicines, equipment,
              festival boxes or any special family-care requirement.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918904328298"
                className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
              >
                <Phone size={18} />
                Call Us
              </a>

              <a
                href="https://wa.me/918904328298"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <a
                href="mailto:care@thecarebridge.co.in"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-[#173f35]"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gray-600">
              <Clock3 size={17} />
              Ordering assistance available from 9 AM to 7 PM
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
