import { handleError } from "../helpers/handleError";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkuser = await User.findOne({ email });
    if (checkuser) {
      next(handleError(409, "user already registered"));
    }
    const hashedPassword = bcryptjs.hashSync(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({
        success: true,
        message: 'registration successfull.'
    })
  } catch (error) {
    next(handleError(500, error.message ))
  }
};
export const Login = async (req, res) => {};
