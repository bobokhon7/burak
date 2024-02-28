import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, on goHomePage", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("GoLogin");

    res.send("Login Page");
  } catch (err) {
    console.log("Error, on Login Page", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("go SignUp");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, on signup Page", err);
  }
};

export default restaurantController;
