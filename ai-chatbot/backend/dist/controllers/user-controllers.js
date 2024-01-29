import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = User.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already exists.");
        const hashedPassword = await hash(password, 10);
        const users = new User({ name, email, password: hashedPassword });
        await users.save();
        return res.status(200).json({ message: "ok", name: users.name, email: users.email, });
    }
    catch (error) {
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        //user login
        const { email, password } = req.body;
        const users = await User.findOne({ email });
        if (!users) {
            return res.status(401).send("User not registered.");
        }
        const isPasswordCorrect = await compare(password, users.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Wrong Password.");
        }
        //token and cookie store
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = createToken(users._id.toString(), users.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res.status(200).json({ message: "ok", name: users.name, email: users.email, });
    }
    catch (error) {
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const verifyUser = async (req, res, next) => {
    try {
        //user login
        const users = await User.findById(res.locals.jwtData.id);
        if (!users) {
            return res.status(401).send("User not registered OR Token malfunction");
        }
        if (users._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permission didn't match");
        }
        return res.status(200).json({ message: "ok", name: users.name, email: users.email, });
    }
    catch (error) {
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map