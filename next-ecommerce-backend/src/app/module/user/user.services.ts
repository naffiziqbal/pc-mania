import { IUser } from "../shared/interface";
import { User } from "./user.schema";

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

export const UserServices = { createUserToDb, getUserFromDb };
