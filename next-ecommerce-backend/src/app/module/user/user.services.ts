import { IUser } from "../shared/interface";
import { User } from "./user.schema";
const bcrypt = require("bcryptjs");

const createUserToDb = async (user: IUser) => {
  const existingUser = await User.find({ email: user?.email });
  // console.log(existingUser, "Existing User");

  if (!existingUser.length) {
    const data = await User.create(user);
    return data;
  }
  return;
};

const getUserFromDb = async () => {
  const data = await User.find({});
  return data;
};

const userLogin = async (user: IUser) => {
  const { email, password } = user;
  const data = await User.findOne({ email });
  console.log(data);
  if (!data) {
    return data;
  }

  const passwordMatch = await bcrypt.compare(password, data?.password);
  if (!passwordMatch) {
    return "E";
  }
  return data;
};

export const UserServices = { createUserToDb, getUserFromDb, userLogin };

//  I Will Delete JWT
