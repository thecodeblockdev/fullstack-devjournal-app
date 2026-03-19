import User from "../models/User.js";
import bcrypt from "bcrypt";

export const handleSingup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // const email = req.body
        // const password = req.body
        // If email already exists

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("Email already exist");
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashPassword,
        });
        await newUser.save();
        res.send("User saved successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
};

export const handleLogin = async (req, res) => {
    try {
        {
            // Getting user email and password
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.render("login", { error: "User not found" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.render("login", { error: "Invalid Credentials" });
            }
            return res.render("success", { message: "Login Successfull" });
        }
    } catch (error) {
        console.error(error);
        return res.render("login", { error: "Something went wrong" });
    }
};
