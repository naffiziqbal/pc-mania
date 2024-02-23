const { default: axios } = require("axios")

// const url = `https://pc-mania.vercel.app/api/v1`
const url = `http://localhost:5000/api/v1`
const API = axios.create({ baseURL: url })


export const signUpUser = async (data) => API.post('/user/create-user', data)
export const loginUser = async (data) => API.post("/user/login", data)
export const singleUser = async (id) => API.post(`/user/${id}`)
export const getAllProducts = async () => API.get(`/product/all-products`)
export const createOrder = async ({ userId, orderItems }) => API.post('/order/create-order', { userId, orderItems })
export const getOrdersById = async (id) => API.get(`/order/${id}`)
export const cancelOrder = async (id) => API.post(`/order/cancel/${id}`)
export const getReviews = async () => API.get(`review/all-review`)
export const addProduct = async (data) => API.post('/product/create-product', data)
