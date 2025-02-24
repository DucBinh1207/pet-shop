type VariationSupply = {
  productVariantId: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  dateCreated: string;
};

export type SupplyType = {
  id: string;
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  rating: number;
  category: string;
  material: string;
  brand: string;
  type: string;
  totalReview: number;
  variationsSupplies: VariationSupply[];
};

export type SupplyResponse = {
  products: SupplyType[];
  totalPages: number;
  totalRecords: number;
};
