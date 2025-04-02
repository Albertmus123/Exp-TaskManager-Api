import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const userSignIn = async(req, res) => {
  const { email,password } = req.body;
  const user = await User.findOne({email}).exec();

  if (!user) {
    res.status(404).json({
      message: "user with this email doesn't exists"
    })
  }
  const passwordMatch =await bcrypt.compare(password,user.password)
  if (!passwordMatch) {
    res.status(400).json({
      message: "Invalid Credentials"
    })
  }

  const token = jwt.sign({
    role:user.role,
    email:user.email,
    id:user._id
  },process.env.JWT_SECRET_KEY,{expiresIn: "1h"})


  res.status(200).json({
    token
  });
};

export const userSignUp = async (req, res) => {
  try{
    const { email, password, role } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);
    await User.create({
      email,
      role,
      password: hashedpassword,
    });
    res.status(201).json({
      message: "Account is created Successfully!",
    });

  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message: "Server error"
    })
  }
 
};

