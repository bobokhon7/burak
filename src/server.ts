import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

// CLUSTER => DATABASE => COLLECTION => DOCUMENT
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDb connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`the server is running successfully on ${PORT}`);
      console.log(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("Error on connection Mongodb", err));
