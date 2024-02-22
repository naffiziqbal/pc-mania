# PC-Mania

This is The server side documentation of Pc Mania. Pc mania is a modern e-commerce type web application with a single seller. The main concept is Only Admin can sell the product. And User can Buy and Give review to the products. 

This backend is hosted on Vercel.  Live link: `https://pc-mania.vercel.app/api/v1/`
Live Website : `https://pcmania.vercel.app`

## Endpoints and Schema

### User API

1. Create user: `/user/create-user`(POST)
2. Login user: `/user/login` (POST)
3. Get single user: `/user/:id` (POST) 
4. Get all users: `/user/all-users` (GET)

### User  Schema

```tsx
  name: string
  email: string
  password: string
  image: string
  role: string
```

## Product APIs and Schemas

### Product API

1. Create product: `/product/create-product` (POST)
2. Get all products : `/product/all-products` (GET)
3. Get Single Product: `/product/:id` (GET)
4. Get Products as Category: `/product?query=name` (GET)

### Product Schema

```tsx
  name: string
  description: string
  category: string
  image: string
  price: number
  stock: boolean
```

### Order API and Schema

1. Create order: `/order/create-order` (POST)\
2. Get all orders: `/order/all-orders` (GET)
3. Get Single Orders: `/order/:id`  (GET)

### Schema

```tsx
  userId: string
  orderItems: object[],
  userDetails: IOrderDetails[]
```

### Cancelation

1. Get Cancel Orders : `/cancel/all-canceled-order` (GET)
2. Get Single Cancel Order: `/cancel/:id` (GET)
3. Cancel Order: `/cancel/:id`

### Schema

```tsx
 userId: string
  orderDetails: {}
```

### Delivered Order

1. Create Delivered: `/delivered/` (POST)
2. Get all Delivered: `/delivered/all-delivered` (GET)

### Schema

```tsx
 orderId: string
  orderDetails: {}
```

This  Is It ============
