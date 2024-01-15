const { default: axios } = require("axios")

const url = `https://pc-mania.vercel.app/api/v1`
const API = axios.create({ baseURL: url })


export const signUpUser = async (data) => API.post('/user/create-user', data)
export const loginUser = async (data) => API.post("/user/login", data)
export const singleUser = async (id) => API.post(`/user/${id}`)
export const getAllProducts = async () => API.get(`/product/all-products`)
export const createOrder = async (orderData) => API.post('/product/order', orderData)
