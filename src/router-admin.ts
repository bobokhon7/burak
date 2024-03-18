import express, { Request, Response } from "express";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

router.get("/", restaurantController.goHome);

router
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

router
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("productImage"),
    restaurantController.processSignup
  );

router.get("/logout", restaurantController.logout);

router.get("/check-me", restaurantController.checkAuthSession);

/**  Product */
router.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
);
router.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  // uploadProductImage.single("productImage"),
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
router.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct
);

/**  User */

router.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUsers
);

export default router;
