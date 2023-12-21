import { IUser } from "../shared/interface";
import { User } from "./user.schema";
const bcrypt = require("bcryptjs");

const createUserToDb = async (user: IUser) => {
  const existingUser = await User.find({ email: user?.email });
  console.log(existingUser, "Existing User");

  if (!existingUser.length) {
    const data = await User.create(user);
    return data;
  }
  throw new Error("Email is already in Use");
};

const getUserFromDb = async () => {
  const data = await User.find({});
  return data;
};

const userLogin = async (user: IUser) => {
  const { email, password } = user;
  const data = await User.findOne({ email });
  if (!data) {
    throw new Error("No User Found");
  }
  try {
    const passwordMatch = await bcrypt.compare(password, data.password);
    if (!passwordMatch) {
      throw new Error("No User Found");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const UserServices = { createUserToDb, getUserFromDb, userLogin };

//  I Will Delete JWT
