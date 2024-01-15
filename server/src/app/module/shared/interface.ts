export interface IProduct {
  name: string
  description: string
  category: string
  image: string
  price: number
  stock: boolean
}

export interface IReview {
  productId: string
  reviewerId: string
  reviewerName: string
  reviewerImage: string
  reviewerEmail: string
  ratingPoint: number
  reviewerMessage: string
}

export interface IUser {
  name: string
  email: string
  password: string
  image: string
  role: string
}

export interface IOrder {
  userId: String
  orderItems: [],
}

