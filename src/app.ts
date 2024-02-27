import express from "express";
import path from "path";
import router from "./router";

/**   1-ENTRANCE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**   2-SESSIONS  **/
/**   3-VIEWS  **/
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**   $-ROUTES  **/
app.use("/", router); //Middleware Design Pattern

export default app;
