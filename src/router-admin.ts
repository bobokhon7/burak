import express, { Request, Response } from "express";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";

router.get("/", restaurantController.goHome);

router
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

router
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

router.get("/logout", restaurantController.logout);

router.get("/check-me", restaurantController.checkAuthSession);

/**  Product */
/**  User */

export default router;
