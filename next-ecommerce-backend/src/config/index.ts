import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  databaseUrl: process.env.DB_URL,
  jwtSecret: process.env.USER_SECRET,
};
