import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const purchaseItems = [
  {
    name: "Wheelchairs",
    description:
      "Manual and attendant wheelchairs for everyday mobility and recovery support.",
    uses: ["Home use", "Hospital discharge", "Travel support"],
  },
  {
    name: "Walkers",
    description:
      "Standard, folding and wheeled walkers for balance and assisted movement.",
    uses: ["Mobility support", "Post-surgery recovery", "Daily walking"],
  },
  {
    name: "BP Monitors",
    description:
      "Digital blood-pressure monitors suitable for routine home health checks.",
    uses: ["Home monitoring", "Family care", "Regular tracking"],
  },
  {
    name: "Glucometers",
    description:
      "Blood-glucose monitoring devices and compatible testing accessories.",
    uses: ["Diabetes care", "Routine testing", "Home monitoring"],
  },
  {
    name: "Nebulizers",
    description:
      "Home-use nebulizer machines for prescribed respiratory treatments.",
    uses: ["Respiratory support", "Home care", "Regular treatment"],
  },
  {
    name: "Pulse Oximeters",
    description:
      "Compact oxygen-saturation and pulse monitoring devices for home use.",
    uses: ["Oxygen monitoring", "Recovery care", "Daily health checks"],
  },
  {
    name: "Air Mattresses",
    description:
      "Pressure-relief air mattresses designed for patients requiring extended bed rest.",
    uses: ["Bedridden care", "Pressure relief", "Long-term recovery"],
  },
  {
    name: "Commode Chairs",
    description:
      "Portable and bedside commode chairs for safer and more convenient daily care.",
    uses: ["Mobility limitations", "Bedside use", "Home care"],
  },
];

const rentalItems = [
  {
    name: "Hospital Beds",
    description:
      "Manual and adjustable hospital beds for temporary or extended home recovery.",
  },
  {
    name: "Wheelchairs",
    description:
      "Short-term and monthly wheelchair rental options based on availability.",
  },
  {
    name: "Oxygen Concentrators",
    description:
      "Rental support for oxygen concentrators with guidance on available models.",
  },
  {
    name: "Patient Lifts",
    description:
      "Patient-transfer equipment for safer movement between bed, chair and bathroom.",
  },
  {
    name: "Air Mattresses",
    description:
      "Pressure-relief mattress rentals for recovery and long-term care needs.",
  },
  {
    name: "Suction Machines",
    description:
      "Home-care suction equipment available for rental based on prescription and availability.",
  },
];

const benefits = [
  {
    title: "Trusted Suppliers",
    description:
      "Equipment sourced through reliable dealers, distributors and service partners.",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Pricing",
    description:
      "We compare supplier options to provide dependable value for purchase and rental.",
    icon: PackageCheck,
  },
  {
    title: "Home Delivery Support",
    description:
      "Delivery coordination based on equipment type, location and supplier availability.",
    icon: Truck,
  },
  {
    title: "Personal Assistance",
    description:
      "Our team helps you understand available options before you place an enquiry.",
    icon: HeartPulse,
  },
];

export default function MedicalEquipmentPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
            CareBridge Medical Equipment
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Medical equipment for purchase and rental
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Access essential healthcare and recovery equipment through trusted
            suppliers at competitive prices. Our team can assist with product
            selection, availability, delivery and rental enquiries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20enquire%20about%20medical%20equipment."
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4ebdd] text-[#173f35]">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-[#173f35]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Purchase
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Equipment available for purchase
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Tell us the equipment you need, preferred specifications and
                delivery location. We will share suitable options based on
                supplier availability.
              </p>
            </div>

            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20please%20share%20medical%20equipment%20purchase%20options."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#173f35]"
            >
              Request purchase options
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {purchaseItems.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                  <Stethoscope size={27} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#173f35]">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2">
                  {item.uses.map((use) => (
                    <div
                      key={use}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#b68d40]"
                      />
                      {use}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={`https://wa.me/918904328298?text=${encodeURIComponent(
                      `Hello CareBridge, I would like to enquire about purchasing ${item.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f35] px-5 py-3 font-semibold text-white"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rental */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Rental Support
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Medical equipment available for rent
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Rental availability, deposit, duration, delivery and installation
              depend on the equipment, supplier and service location.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rentalItems.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-gray-200 bg-[#faf9f6] p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                  <PackageCheck size={27} />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#b68d40]">
                  Available for Rent
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#173f35]">
                  {item.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <a
                  href={`https://wa.me/918904328298?text=${encodeURIComponent(
                    `Hello CareBridge, I would like to enquire about renting ${item.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#173f35]"
                >
                  Check availability
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rentals"
              className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
            >
              View Rental Information
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry details */}
      <section className="bg-[#f4ebdd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Faster Assistance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Share these details with our team
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Providing clear requirements helps us check suitable suppliers,
                models and availability more quickly.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20need%20help%20selecting%20medical%20equipment."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle size={18} />
                  Start an Enquiry
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
              <div className="space-y-4">
                {[
                  "Equipment name",
                  "Purchase or rental",
                  "Patient location",
                  "Required delivery date",
                  "Expected rental duration",
                  "Preferred model or specification",
                  "Doctor recommendation, if applicable",
                  "Contact name and phone number",
                ].map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#b68d40]"
                    />
                    <span className="font-medium text-[#173f35]">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-[#0b4938] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            Pricing and Availability
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Get the right equipment at dependable value
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Final pricing depends on brand, model, supplier, rental duration,
            installation, delivery location and current availability.
          </p>

          <a
            href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20please%20share%20medical%20equipment%20options%20and%20pricing."
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
          >
            Request Equipment Options
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
