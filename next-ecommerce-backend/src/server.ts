import mongoose from "mongoose";
import config from "./config";
import app from "./app/app";

const port = process.env.PORT || 5000;
async function run() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.get("/", (req, res) => {
      res.send("API is Online");
    });
    app.listen(port, () => {
      console.log(`Server is Listening On port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}
run();
