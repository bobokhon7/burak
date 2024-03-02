import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error, on Login Page", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, on signup Page", err);
    res.send(err);
  }
};

export default restaurantController;
