type FoodVariation = {
  productVariantId: string;
  ingredient: string;
  weight: string;
  price: number;
  quantity: number;
  dateCreated: string;
};

export type FoodType = {
  id: string;
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  rating: number;
  category: string;
  petType: string;
  nutritionInfo: string;
  expireDate: string;
  brand: string;
  variationsFoods: FoodVariation[];
};

export type FoodResponse = {
  products: FoodType[];
  totalPages: number;
};
