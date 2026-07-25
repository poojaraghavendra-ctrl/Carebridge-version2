import Link from "next/link";

export default function HelpOrderingPage() {
  return (
    <main className="bg-[#FAF9F6]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-3 font-semibold text-[#B68D40]">
            Assisted Ordering
          </p>

          <h1 className="text-4xl font-bold text-[#173F35] md:text-5xl">
            Not Comfortable Ordering Online?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Our CareBridge team can help you place orders for groceries,
            medicines, medical equipment, daily pooja essentials and festival
            care boxes through phone or WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="rounded-xl bg-[#173F35] px-6 py-3 font-semibold text-white"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#173F35] px-6 py-3 font-semibold text-[#173F35]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-[#173F35]">
              We Can Help You With
            </h2>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Grocery orders</li>
              <li>✓ Medicine enquiries and orders</li>
              <li>✓ Medical equipment rental or purchase</li>
              <li>✓ Daily pooja essentials</li>
              <li>✓ Festival care boxes</li>
              <li>✓ Monthly and repeat orders</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#F4EBDD] p-7">
            <h2 className="text-2xl font-bold text-[#173F35]">
              Ordering Hours
            </h2>

            <p className="mt-5 text-gray-700">Monday to Saturday</p>
            <p className="mt-2 text-lg font-semibold text-[#173F35]">
              9:00 AM to 7:00 PM
            </p>

            <p className="mt-5 text-gray-600">
              A family member can also place an order for a loved one.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#173F35] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">How It Works</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["1", "Call or message us"],
              ["2", "Tell us what you need"],
              ["3", "We prepare the order"],
              ["4", "You confirm the details"],
              ["5", "We arrange delivery"],
            ].map(([number, text]) => (
              <div key={number}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B68D40] font-bold">
                  {number}
                </div>
                <p className="mt-4">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <Link
            href="/"
            className="font-semibold text-[#173F35] underline"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
