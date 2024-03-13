import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Error";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    console.log("body:", req.body);
    res.render("products");
  } catch (err) {
    console.log("Error,getAllProducts ", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standrd.code).json(Errors.standrd);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    console.log("body:", req.body);
  } catch (err) {
    console.log("Error, createNewProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standrd.code).json(Errors.standrd);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    console.log("body:", req.body);
  } catch (err) {
    console.log("Error, createNewProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standrd.code).json(Errors.standrd);
  }
};

export default productController;
