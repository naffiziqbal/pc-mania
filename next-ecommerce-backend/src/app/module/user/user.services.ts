import { IUser } from "../shared/interface";
import { User } from "./user.schema";

const createUserToDb = async (user: IUser) => {
  const existingUser = await User.find({ email: user?.email });
  console.log(existingUser, "Existing User");

  if (!existingUser) {
    const data = await User.create(user);
    return data;
  }
  throw new Error("Email is already in Use");
};

export const UserServices = { createUserToDb };
