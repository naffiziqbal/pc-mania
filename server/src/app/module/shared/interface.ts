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

interface IOrderDetails {
  address: string
  city: string
  contact: number
  district: string
  firstName: string
  lastName: string
  zip: number
}

export interface IOrder {
  userId: string
  orderItems: object[],
  userDetails: IOrderDetails[]
}


export interface IdeliveredOrder {
  orderId: string
  orderDetails: {}
}
