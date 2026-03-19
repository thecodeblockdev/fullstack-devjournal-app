import express from "express";

const router = express.Router();
import { handleSingup, handleLogin } from "../controllers/authController.js";
// Lofic for handling signup page logic

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", handleSingup);

router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", handleLogin);

export default router;
