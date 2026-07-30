"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import MedicalEquipmentCard from "@/components/MedicalEquipmentCard";
import type { MedicalEquipmentProduct } from "@/data/medicalEquipmentProducts";

type MedicalEquipmentCatalogueProps = {
  products: MedicalEquipmentProduct[];
  catalogueType: "purchase" | "rental";
};

export default function MedicalEquipmentCatalogue({
  products,
  catalogueType,
}: MedicalEquipmentCatalogueProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(products.map((product) => product.category))
      ),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.specifications.some((specification) =>
          specification.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedCategory !== "All";

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
  }

  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">
              Search medical equipment
            </span>

            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder={
                catalogueType === "rental"
                  ? "Search rental equipment..."
                  : "Search medical equipment..."
              }
              className="w-full rounded-xl border border-gray-300 bg-[#faf9f6] py-3 pl-12 pr-12 text-[#173f35] outline-none transition placeholder:text-gray-400 focus:border-[#173f35] focus:ring-2 focus:ring-[#173f35]/10"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#173f35]"
              >
                <X size={18} />
              </button>
            )}
          </label>

          <p className="text-sm font-medium text-gray-500">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}{" "}
            found
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected =
              selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={
                  isSelected
                    ? "rounded-full bg-[#173f35] px-4 py-2 text-sm font-semibold text-white"
                    : "rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#173f35] transition hover:border-[#173f35]"
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#173f35]"
          >
            <X size={16} />
            Clear all filters
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <MedicalEquipmentCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-10 text-center">
          <h3 className="text-xl font-bold text-[#173f35]">
            No matching equipment found
          </h3>

          <p className="mt-3 text-gray-600">
            Try a different product name or category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-xl bg-[#173f35] px-6 py-3 font-semibold text-white transition hover:bg-[#245b4c]"
          >
            Clear Search and Filters
          </button>
        </div>
      )}
    </div>
  );
}
