import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";

const memberController: T = {};

const memberService = new MemberService();

////We use  on react project
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const input: MemberInput = req.body;

    const result: Member = await memberService.signup(input);
    ///// TODO: TOKEN
    res.json({ member: result });
  } catch (err) {
    console.log("Error, on signup Page", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standrd.code).json(Errors.standrd);
    // res.json()
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const result = await memberService.login(input);
    ///// TODO: TOKEN

    res.json({ member: result });
  } catch (err) {
    console.log("Error, on Login Page", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standrd.code).json(Errors.standrd);
    // res.json();
  }
};

export default memberController;
