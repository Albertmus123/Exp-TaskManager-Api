import express from "express";
import { userSignIn, userSignUp } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/login", userSignIn);
userRouter.post("/signup", userSignUp);

export default userRouter;
