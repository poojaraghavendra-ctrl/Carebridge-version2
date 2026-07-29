import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const rentalItems = [
  {
    name: "Hospital Beds",
    description:
      "Manual and adjustable hospital beds for temporary recovery, post-surgery care and long-term home care.",
    suitableFor: [
      "Post-surgery recovery",
      "Long-term bed rest",
      "Home nursing support",
    ],
  },
  {
    name: "Wheelchairs",
    description:
      "Manual wheelchair rentals for short-term mobility, hospital discharge and temporary recovery needs.",
    suitableFor: [
      "Temporary mobility support",
      "Hospital discharge",
      "Travel and appointments",
    ],
  },
  {
    name: "Oxygen Concentrators",
    description:
      "Oxygen concentrator rental assistance based on prescription, model availability and delivery location.",
    suitableFor: [
      "Home oxygen support",
      "Recovery care",
      "Doctor-recommended use",
    ],
  },
  {
    name: "Patient Lifts",
    description:
      "Patient-transfer equipment designed to support safer movement between beds, chairs and bathrooms.",
    suitableFor: [
      "Limited mobility",
      "Caregiver assistance",
      "Home patient transfer",
    ],
  },
  {
    name: "Air Mattresses",
    description:
      "Pressure-relief air mattresses for patients who require extended periods of bed rest.",
    suitableFor: [
      "Pressure relief",
      "Bedridden care",
      "Long-term recovery",
    ],
  },
  {
    name: "Suction Machines",
    description:
      "Home-care suction machine rentals subject to medical requirement, supplier availability and location.",
    suitableFor: [
      "Home nursing",
      "Recovery support",
      "Prescribed patient care",
    ],
  },
  {
    name: "Commode Chairs",
    description:
      "Portable bedside commode chairs for patients with temporary or ongoing mobility limitations.",
    suitableFor: [
      "Bedside care",
      "Post-surgery support",
      "Mobility limitations",
    ],
  },
  {
    name: "Walker Support",
    description:
      "Short-term walker rental assistance for rehabilitation, recovery and supported movement.",
    suitableFor: [
      "Rehabilitation",
      "Balance support",
      "Temporary recovery",
    ],
  },
];

const benefits = [
  {
    title: "Flexible Rental Duration",
    description:
      "Rental periods may be arranged based on your requirement and supplier terms.",
    icon: CalendarDays,
  },
  {
    title: "Trusted Rental Partners",
    description:
      "Equipment is coordinated through reliable medical-equipment dealers and service partners.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery Coordination",
    description:
      "We help coordinate delivery, pickup and installation where applicable.",
    icon: Truck,
  },
  {
    title: "Personal Assistance",
    description:
      "Our team helps you check suitable options, availability and rental conditions.",
    icon: HeartHandshake,
  },
];

const rentalProcess = [
  {
    number: "01",
    title: "Share your requirement",
    description:
      "Tell us the equipment name, location, required date and expected rental duration.",
  },
  {
    number: "02",
    title: "We check availability",
    description:
      "Our team checks suitable models, supplier terms, delivery options and current availability.",
  },
  {
    number: "03",
    title: "Confirm your rental",
    description:
      "Review the quotation, deposit, rental duration and service conditions before confirmation.",
  },
  {
    number: "04",
    title: "Delivery and pickup",
    description:
      "The supplier coordinates delivery, installation and pickup according to the agreed terms.",
  },
];

export default function RentalsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
            CareBridge Equipment Rentals
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Medical equipment rentals for home recovery and care
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Rent essential medical equipment through trusted dealers and
            service partners. CareBridge assists with availability, pricing,
            rental duration, delivery and pickup coordination.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20enquire%20about%20medical%20equipment%20rentals."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
            >
              <MessageCircle size={18} />
              Check Rental Availability
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
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4ebdd] text-[#173f35]">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-[#173f35]">
                    {benefit.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Equipment */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Rental Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Equipment available for rent
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Availability varies by supplier and location. Contact our team to
              check suitable models, rental duration and delivery options.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {rentalItems.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                  <PackageCheck size={27} />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#b68d40]">
                  Available for Rent
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#173f35]">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-gray-200 pt-5">
                  <p className="font-semibold text-[#173f35]">Suitable for:</p>

                  <div className="mt-3 space-y-2">
                    {item.suitableFor.map((use) => (
                      <div
                        key={use}
                        className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#b68d40]"
                        />
                        {use}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={`https://wa.me/918904328298?text=${encodeURIComponent(
                      `Hello CareBridge, I would like to check the rental availability and pricing for ${item.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f35] px-5 py-3 font-semibold text-white"
                  >
                    Check Availability
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How Rental Works */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              How equipment rental works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rentalProcess.map((step) => (
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

      {/* Required Details */}
      <section className="bg-[#f4ebdd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Faster Assistance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Share your rental requirement
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Send us the details below so we can check suitable rental
                options and provide clearer information.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20need%20help%20with%20a%20medical%20equipment%20rental."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle size={18} />
                  Start Rental Enquiry
                </a>

                <Link
                  href="/help-ordering"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#173f35] px-6 py-3 font-semibold text-[#173f35]"
                >
                  Get Personal Help
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#f4f7ef] p-7">
              <div className="space-y-4">
                {[
                  "Equipment required",
                  "Patient location",
                  "Required delivery date",
                  "Expected rental duration",
                  "Patient floor and lift availability",
                  "Preferred model or size",
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

      {/* Rental Conditions */}
      <section className="bg-[#0b4938] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
                Rental Information
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Pricing depends on equipment, location and duration
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Rental charges, refundable deposit, transportation,
                installation, maintenance and pickup conditions vary according
                to the equipment and supplier.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Confirm the rental duration",
                "Review deposit requirements",
                "Check delivery and pickup charges",
                "Understand damage and maintenance terms",
                "Verify installation support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-4"
                >
                  <CheckCircle2 size={19} className="text-[#e2c98a]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20please%20share%20medical%20equipment%20rental%20options%20and%20pricing."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
            >
              Request Rental Quote
              <ArrowRight size={18} />
            </a>

            <Link
              href="/medical-equipment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white"
            >
              View Purchase Options
            </Link>
          </div>
        </div>
      </section>

      {/* Support Note */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <Clock3 size={28} className="mx-auto text-[#b68d40]" />

          <h2 className="mt-4 text-2xl font-bold text-[#173f35]">
            Need equipment urgently?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Call our team directly so we can check the fastest available
            supplier and delivery option for your location.
          </p>

          <a
            href="tel:+918904328298"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </PageShell>
  );
}
