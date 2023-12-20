export interface IProduct {
  name: string;
  category: string;
  image: string;
  price: number;
  stock: boolean;
}

export interface IReview {
  productId: string;
  reviewerId: string;
  reviewerMessage: string;
}


