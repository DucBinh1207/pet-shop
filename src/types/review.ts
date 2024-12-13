export type ReviewType = {
  idComment: string;
  idUser: string;
  email: string;
  name: string;
  image: string;
  star: number;
  content: string;
  time: string;
};

export type AddReviewDataType = {
  idProduct: string;
  rating: number;
  content: string;
};
