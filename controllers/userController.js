import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const userSignIn = (req, res) => {
  res.send("Sign In");
};

export const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  await User.create({
    username,
    email,
    password: hashedpassword,
  });
  res.json({
    message: "User is created Successfully!",
  });
};
