import express from "express";

const router = express.Router();
import { handleSingup } from "../controllers/authController.js";
// Lofic for handling signup page logic

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", handleSingup);

export default router;
