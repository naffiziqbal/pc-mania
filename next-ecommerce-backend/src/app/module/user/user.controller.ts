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

export const UserController = { createUser };
