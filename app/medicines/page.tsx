import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartPulse,
  MessageCircle,
  PackageCheck,
  Phone,
  Pill,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import PageShell from "@/components/PageShell";

const productCategories = [
  {
    name: "Prescription Medicines",
    description:
      "Order prescribed medicines by sharing a valid prescription with the CareBridge team.",
    items: [
      "Regular medicines",
      "Post-hospital medicines",
      "Chronic-care medicines",
    ],
    icon: FileText,
  },
  {
    name: "Over-the-Counter Products",
    description:
      "Common healthcare products available without a prescription, subject to pharmacist guidance.",
    items: [
      "Basic pain relief",
      "Cold and cough care",
      "Digestive-care products",
    ],
    icon: Pill,
  },
  {
    name: "Diabetes Care",
    description:
      "Everyday diabetes-management products and monitoring essentials for home use.",
    items: [
      "Testing strips",
      "Lancets",
      "Glucometers",
    ],
    icon: HeartPulse,
  },
  {
    name: "First-Aid Essentials",
    description:
      "Useful first-aid supplies for homes, caregivers, workplaces and travel.",
    items: [
      "Bandages and gauze",
      "Antiseptic products",
      "Medical tape",
    ],
    icon: PackageCheck,
  },
  {
    name: "Senior-Care Products",
    description:
      "Daily healthcare and personal-care essentials selected for older adults.",
    items: [
      "Adult-care products",
      "Supportive-care items",
      "Daily hygiene essentials",
    ],
    icon: ShoppingBag,
  },
  {
    name: "Mother and Baby Care",
    description:
      "Healthcare, hygiene and wellness essentials for mothers, infants and young children.",
    items: [
      "Baby hygiene products",
      "Mother-care essentials",
      "Feeding accessories",
    ],
    icon: HeartPulse,
  },
  {
    name: "Personal Healthcare",
    description:
      "Everyday hygiene, wellness and preventive-care products for individuals and families.",
    items: [
      "Masks and sanitizers",
      "Thermometers",
      "Personal hygiene products",
    ],
    icon: ShieldCheck,
  },
  {
    name: "Monthly Medicine Support",
    description:
      "Assistance with recurring medicine requirements for parents, seniors and family members.",
    items: [
      "Repeat-order assistance",
      "Family medicine lists",
      "Delivery coordination",
    ],
    icon: Truck,
  },
];

const benefits = [
  {
    title: "Prescription Support",
    description:
      "Share your prescription securely through WhatsApp for medicine enquiries.",
    icon: FileText,
  },
  {
    title: "Trusted Pharmacy Network",
    description:
      "Orders are coordinated through licensed pharmacy and healthcare partners.",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Pricing",
    description:
      "We help check available brands, pack sizes and pricing through trusted suppliers.",
    icon: PackageCheck,
  },
  {
    title: "Home Delivery Assistance",
    description:
      "Delivery is coordinated according to medicine availability and service location.",
    icon: Truck,
  },
];

const orderingSteps = [
  {
    number: "01",
    title: "Share your medicine list",
    description:
      "Send the medicine names, quantities, prescription or a clear photo through WhatsApp.",
  },
  {
    number: "02",
    title: "We check availability",
    description:
      "Our team checks the required products with trusted pharmacy partners.",
  },
  {
    number: "03",
    title: "Review the order",
    description:
      "Confirm available brands, quantities, pricing and delivery details.",
  },
  {
    number: "04",
    title: "Receive your medicines",
    description:
      "The confirmed order is coordinated for delivery to the requested location.",
  },
];

const prescriptionGuidelines = [
  "Upload a clear and readable prescription",
  "Ensure the doctor’s name is visible",
  "Include the prescription date",
  "Mention the required medicine quantity",
  "Share the patient’s delivery location",
  "Do not send expired prescriptions",
  "Prescription medicines require valid documentation",
  "Availability may vary by medicine and location",
];

export default function MedicinesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#062d23] via-[#0b4938] to-[#117153] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#e2c98a]">
            CareBridge Medicines
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Medicine and healthcare essentials delivered with care
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Share your prescription or medicine list with our team. CareBridge
            helps check availability through trusted pharmacy partners and
            coordinates delivery to you or your loved ones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20order%20medicines."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
            >
              <MessageCircle size={18} />
              Send Medicine List
            </a>

            <a
              href="tel:+918904328298"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white"
            >
              <Phone size={18} />
              Call CareBridge
            </a>
          </div>

          <div className="mt-8 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-[#e2c98a]"
              />

              <p className="leading-7 text-white/85">
                Prescription medicines will be supplied only through authorised
                pharmacy partners and require a valid prescription where
                applicable.
              </p>
            </div>
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

      {/* Product Categories */}
      <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
              Healthcare Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
              Medicines and healthcare products
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Product availability depends on the pharmacy, brand, prescription
              requirement and delivery location.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.name}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#173f35]">
                    {category.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {category.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#b68d40]"
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <a
                      href={`https://wa.me/918904328298?text=${encodeURIComponent(
                        `Hello CareBridge, I would like to enquire about ${category.name}.`
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
              );
            })}
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
              How medicine ordering works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {orderingSteps.map((step) => (
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

      {/* Prescription Section */}
      <section className="bg-[#f4ebdd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:p-12 lg:grid-cols-2">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
                <FileText size={27} />
              </div>

              <p className="mt-6 font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Prescription Orders
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Send a clear copy of your prescription
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                A valid prescription is required for medicines that cannot be
                supplied without medical authorisation.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20would%20like%20to%20share%20a%20prescription%20for%20a%20medicine%20order."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
                >
                  <MessageCircle size={18} />
                  Upload on WhatsApp
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
                {prescriptionGuidelines.map((guideline) => (
                  <div
                    key={guideline}
                    className="flex items-start gap-3 rounded-xl bg-white px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#b68d40]"
                    />

                    <span className="font-medium leading-6 text-[#173f35]">
                      {guideline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Medicine Assistance */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-[#b68d40]">
                Recurring Requirements
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#173f35] md:text-4xl">
                Monthly medicine assistance for loved ones
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Share the recurring medicine list for your parents or family
                members. Our team can assist with repeat-order coordination
                based on current prescriptions and availability.
              </p>

              <a
                href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20I%20need%20help%20with%20a%20monthly%20medicine%20requirement."
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white"
              >
                <MessageCircle size={18} />
                Discuss Monthly Support
              </a>
            </div>

            <div className="rounded-3xl bg-[#faf9f6] p-7 md:p-9">
              <h3 className="text-2xl font-bold text-[#173f35]">
                Share these details
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Patient name",
                  "Current prescription",
                  "Medicine names and quantities",
                  "Preferred brands",
                  "Delivery address",
                  "Expected monthly date",
                  "Alternative contact person",
                  "Any storage instructions",
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

      {/* Important Note */}
      <section className="bg-[#0b4938] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="font-semibold uppercase tracking-[0.18em] text-[#e2c98a]">
            Responsible Healthcare
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Medicines should be used only as advised
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            CareBridge does not provide medical diagnosis or replace the advice
            of a doctor or pharmacist. Always follow professional medical
            guidance and the instructions provided with your medicines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918904328298?text=Hello%20CareBridge%2C%20please%20help%20me%20check%20medicine%20availability."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e2c98a] px-6 py-3 font-semibold text-[#173f35]"
            >
              Check Medicine Availability
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+918904328298"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white"
            >
              <Phone size={18} />
              Call for Assistance
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
