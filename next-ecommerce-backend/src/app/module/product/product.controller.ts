import { RequestHandler } from "express";
import { ProductServices } from "./product.services";

const createProduct: RequestHandler = async (req, res) => {
  const product = req.body;
  try {
    const data = await ProductServices.createProductToDb(product);
    res.status(200).json({
      sucess: true,
      messsage: "Product Created Successfully",
      data,
    });
  } catch (err) {
    res.send({ error: { message: "Product Creation Failed" } });
  }
};

const getProducts: RequestHandler = async (req, res) => {
  try {
    const data = await ProductServices.getProductsFromDb();
    if (!data) throw new Error("No Products Found");
    else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const ProductController = { createProduct, getProducts };
