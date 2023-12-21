import { RequestHandler } from "express";
import { UserServices } from "./user.services";

const createUser: RequestHandler = async (req, res) => {
  const user = req.body;
  try {
    const data = await UserServices.createUserToDb(user);
    res.status(200).json({
      success: true,
      message: "User Created Successfull",
      data,
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
  const data = await UserServices.userLogin(user);
  if (!data) {
    throw new Error("User Not Found");
  }
  res.status(200).json({ success: true, message: "Logged In", data });
};
export const UserController = { createUser, getAllUser, userLogin };
