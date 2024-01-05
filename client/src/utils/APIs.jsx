const { default: axios } = require("axios")

const url = `https://pc-mania.vercel.app/api/v1`
const API = axios.create({ baseURL: url })


export const signUpUser = async (data) => API.post('/user/create-user', data)
