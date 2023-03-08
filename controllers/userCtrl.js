import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../config/jwtToken.js";

export const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // user already exists
    throw new Error("User already exists");
  }
});

// login controller
export const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if the user already exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id)
    });
  } else {
    throw new Error("Invalid credentials");
  }
});
