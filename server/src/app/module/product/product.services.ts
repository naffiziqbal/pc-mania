import { IProduct } from "../shared/interface";
import { Product } from "./product.schema";

const createProductToDb = async (product: IProduct) => {
  const data = await Product.create(product);
  return data;
};
const getProductsFromDb = async () => {
  const data = await Product.find({});
  return data;
};
const getSingleProductFromDb = async (id: any) => {
  console.log(id, "params");
  const data = await Product.findById(id);
  return data;
};
const getProductAsCategoriesFromDb = async (category: object) => {
  const data = await Product.find(category)
  console.log(data, "data")
  return data
}

export const ProductServices = {
  createProductToDb,
  getProductsFromDb,
  getSingleProductFromDb,
  getProductAsCategoriesFromDb
};
