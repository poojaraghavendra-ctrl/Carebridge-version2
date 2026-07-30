export type MedicalEquipmentProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  priceLabel: string;
  availability: string;
  enquiryType: "purchase" | "rental";
};

export const medicalEquipmentProducts: MedicalEquipmentProduct[] = [
  {
    id: "manual-wheelchair",
    name: "Manual Wheelchair",
    category: "Mobility Support",
    description:
      "Foldable manual wheelchair suitable for home care, hospital discharge and assisted travel.",
    specifications: [
      "Foldable frame",
      "Attendant handles",
      "Footrest included",
      "Suitable for everyday use",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "foldable-walker",
    name: "Foldable Walker",
    category: "Mobility Support",
    description:
      "Lightweight walking support for senior citizens, rehabilitation and post-surgery recovery.",
    specifications: [
      "Foldable design",
      "Height adjustable",
      "Non-slip grips",
      "Easy home storage",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "digital-bp-monitor",
    name: "Digital BP Monitor",
    category: "Health Monitoring",
    description:
      "Automatic blood-pressure monitor for convenient routine health checks at home.",
    specifications: [
      "Digital display",
      "Automatic measurement",
      "Pulse reading",
      "Home-use design",
    ],
    priceLabel: "Contact for Price",
    availability: "Multiple models available",
    enquiryType: "purchase",
  },
  {
    id: "glucometer",
    name: "Glucometer",
    category: "Diabetes Care",
    description:
      "Blood-glucose monitoring device for regular testing and diabetes-care support.",
    specifications: [
      "Compact device",
      "Digital reading",
      "Home testing",
      "Testing-strip compatibility varies",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "nebulizer",
    name: "Nebulizer Machine",
    category: "Respiratory Care",
    description:
      "Home-use nebulizer machine for respiratory treatment prescribed by a healthcare professional.",
    specifications: [
      "Home-use model",
      "Adult and child mask options",
      "Compact design",
      "Easy operation",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "pulse-oximeter",
    name: "Pulse Oximeter",
    category: "Health Monitoring",
    description:
      "Compact fingertip device for checking oxygen saturation and pulse rate.",
    specifications: [
      "Fingertip design",
      "Digital display",
      "Oxygen saturation reading",
      "Pulse-rate reading",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "air-mattress",
    name: "Pressure Relief Air Mattress",
    category: "Patient Care",
    description:
      "Pressure-relief air mattress for patients requiring prolonged bed rest and recovery support.",
    specifications: [
      "Pressure-relief design",
      "Home-care use",
      "Pump included based on model",
      "Purchase and rental options",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "commode-chair",
    name: "Commode Chair",
    category: "Daily Living Support",
    description:
      "Portable bedside commode chair for patients and senior citizens with limited mobility.",
    specifications: [
      "Portable design",
      "Bedside use",
      "Easy-clean bucket",
      "Suitable for home care",
    ],
    priceLabel: "Contact for Price",
    availability: "Available on enquiry",
    enquiryType: "purchase",
  },
  {
    id: "hospital-bed-rental",
    name: "Hospital Bed Rental",
    category: "Rental Equipment",
    description:
      "Manual or adjustable hospital beds for temporary home recovery and patient care.",
    specifications: [
      "Short-term rental",
      "Monthly rental options",
      "Delivery depends on location",
      "Installation support subject to availability",
    ],
    priceLabel: "Request Rental Quote",
    availability: "Location-based availability",
    enquiryType: "rental",
  },
  {
    id: "oxygen-concentrator-rental",
    name: "Oxygen Concentrator Rental",
    category: "Rental Equipment",
    description:
      "Oxygen concentrator rental support based on prescription, model and service availability.",
    specifications: [
      "Rental duration options",
      "Model depends on availability",
      "Delivery depends on location",
      "Prescription may be required",
    ],
    priceLabel: "Request Rental Quote",
    availability: "Available on enquiry",
    enquiryType: "rental",
  },
];
