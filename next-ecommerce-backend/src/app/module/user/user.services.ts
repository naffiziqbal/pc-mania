import config from "../../../config";
import { IUser } from "../shared/interface";
import { ObjectId } from "mongodb";
import { User } from "./user.schema";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUserToDb = async (user: IUser) => {
  try {
    const existingUser = await User.find({ email: user?.email });
    if (existingUser.length) {
      throw new Error("Email already exists");
    }
    const data = await User.create(user);
    const token = jwt.sign({ data }, config.jwtSecret as string, {
      expiresIn: "1h",
    });
    console.log(token);
    return { data, token };
  } catch (err) {
    console.log(err);
  }
};

const getUserFromDb = async () => {
  const data = await User.find({});
  return data;
};

const userLogin = async (user: IUser, token: any) => {
  const { email, password } = user;
  const data = await User.findOne({ email });
  if (!data) {
    throw new Error("No User Found");
  }
  try {
    const passwordMatch = await bcrypt.compare(password, data.password);
    if (passwordMatch) {
      // jwt.verify(
      //   token,
      //   config.jwtSecret as string,
      //   (err: any, decoded: any) => {
      //     if (err) {
      //       console.log(err, " l");
      //     }
      //     return decoded;
      //   }
      // );
      const decodedToken = jwt.verify(token, config.jwtSecret as string);
      // console.log(decodedToken, "decodedTo");
      const userId = decodedToken?.data?._id;
      const id = new ObjectId(userId);
      const newUser = await User.findById(id);
      console.log(newUser, "IdN");
      return newUser;
    }
  } catch (err) {
    console.log(err);
  }
};

export const UserServices = { createUserToDb, getUserFromDb, userLogin };
