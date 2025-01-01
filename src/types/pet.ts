type VariationPet = {
  productVariantId: string;
  breed: string;
  breedOrigin: boolean;
  dateOfBirth: string;
  deworming: string;
  father: string;
  gender: boolean;
  health: string;
  mother: string;
  price: number;
  quantity: number;
  trait: string;
  type: string;
  vaccine: number;
};

export type PetType = {
  id: string;
  category: string;
  dateCreated: string;
  description: string;
  image: string;
  name: string;
  rating: number | null;
  totalReview: number;
  variationsPets: VariationPet[];
};

export type PetResponse = {
  products: PetType[];
  totalPages: number;
  totalRecords: number;
};
