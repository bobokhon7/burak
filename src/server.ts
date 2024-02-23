import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// CLUSTER => DATABASE => COLLECTION => DOCUMENT
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDb connection succed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("Error on connection Mongodb", err));
