import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

import type { MedicalEquipmentProduct } from "@/data/medicalEquipmentProducts";

type MedicalEquipmentCardProps = {
  product: MedicalEquipmentProduct;
};

export default function MedicalEquipmentCard({
  product,
}: MedicalEquipmentCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello CareBridge,

I would like to enquire about:

Product: ${product.name}
Category: ${product.category}
Type: ${product.enquiryType === "rental" ? "Rental" : "Purchase"}
Quantity:
Delivery location:
Customer name:
Phone number:`
  );

  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ebdd] text-[#173f35]">
          <PackageCheck size={27} />
        </div>

        <span className="rounded-full bg-[#f4f7ef] px-3 py-1 text-xs font-semibold text-[#173f35]">
          {product.enquiryType === "rental" ? "Rental" : "Purchase"}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#b68d40]">
        {product.category}
      </p>

      <h3 className="mt-2 text-xl font-bold text-[#173f35]">
        {product.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {product.description}
      </p>

      <div className="mt-5 space-y-2">
        {product.specifications.map((specification) => (
          <div
            key={specification}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-[#b68d40]"
            />
            <span>{specification}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-2xl bg-[#faf9f6] p-4">
          <p className="text-sm text-gray-500">Pricing</p>

          <p className="mt-1 font-bold text-[#173f35]">
            {product.priceLabel}
          </p>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            {product.availability}
          </p>
        </div>

        <a
          href={`https://wa.me/918904328298?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173f35] px-5 py-3 font-semibold text-white transition hover:bg-[#245b4c]"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
