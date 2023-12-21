import { RequestHandler } from "express";
import { UserServices } from "./user.services";

const createUser: RequestHandler = async (req, res) => {
  const user = req.body;
  try {
    const data = await UserServices.createUserToDb(user);
    console.log(data);
    res.status(200).json({
      success: true,
      message: "User Created Successfull",
      data: data?.data,
      token: data?.token,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUser: RequestHandler = async (req, res) => {
  try {
    const data = await UserServices.getUserFromDb();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};

const userLogin: RequestHandler = async (req, res) => {
  const user = req.body;
  const authHeaders = req?.headers?.authorization;

  const token = authHeaders?.split(" ")[1];
  console.log(token);
  const data = await UserServices.userLogin(user, token);
  if (data) {
    res.status(200).json({
      sucecess: true,
      message: "User Logged In ",
      data,
    });
  }
  return res.status(403).json({ message: "User Not Available" });
};
export const UserController = { createUser, getAllUser, userLogin };
