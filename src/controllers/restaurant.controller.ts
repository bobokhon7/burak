import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome");
    res.render("home");
  } catch (err) {
    console.log("Error, on goHomePage", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("go SignUp");
    res.render("signup");
  } catch (err) {
    console.log("Error, on signup Page", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("GoLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, on Login Page", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    ///// TODO: SESSION AUTHENTICATION

    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, on signup Page", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    ///// TODO: SESSION AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, on Login Page", err);
    res.send(err);
  }
};

export default restaurantController;
