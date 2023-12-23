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

export const ProductServices = { createProductToDb, getProductsFromDb };
