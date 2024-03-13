import express, { Request, Response } from "express";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

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
router.get("/product/all", productController.getAllProducts);
router.post("/product/create", productController.createNewProduct);
router.post("/product/:id", productController.updateChosenProduct);

/**  User */

export default router;
