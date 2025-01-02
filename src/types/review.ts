export type ReviewType = {
  id: string;
  idUser: string;
  email: string;
  name: string;
  image: string;
  star: number;
  content: string;
  time: string;
};

export type ReviewResponse = {
  comments: ReviewType[];
  currentPage: number;
  totalPages: number;
  limit: number;
};

export type AddReviewDataType = {
  idProduct: string;
  star: number;
  content: string;
};
