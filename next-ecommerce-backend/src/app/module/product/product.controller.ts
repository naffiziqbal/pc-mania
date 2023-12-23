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

export const ProductController = { createProduct };
