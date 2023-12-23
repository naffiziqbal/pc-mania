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
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUser: RequestHandler = async (req, res) => {
  try {
    const data = await UserServices.getUserFromDb();
    res.status(200).json({ data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin: RequestHandler = async (req, res) => {
  const user = req.body;
  try {
    const data = await UserServices.userLogin(user);
    if (!data) {
      res.status(403).json({ success: false, message: "Unable to Log In" });
    }
    res.status(200).json({ success: true, message: "Logged In", data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const UserController = { createUser, getAllUser, userLogin };
