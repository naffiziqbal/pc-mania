import { RequestHandler } from "express";
import { ProductServices } from "./product.services";
import { UserServices } from "../user/user.services";

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

const getSigngleProduct: RequestHandler = async (req, res) => {
  const id = req.params.id;
  console.log(id, "request");
  try {
    const data = await ProductServices.getSingleProductFromDb(id);
    if (!data) {
      throw new Error("No Products Found");
    } else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getProductAsCategories: RequestHandler = async (req, res) => {
  const category = req.query
  console.log(category, "category")
  try {
    const data = await ProductServices.getProductAsCategoriesFromDb(category)
    res.send({ data })
  } catch (err) { console.log(err) }
}

export const ProductController = {
  createProduct,
  getProducts,
  getSigngleProduct,
  getProductAsCategories
};
