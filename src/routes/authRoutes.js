import express from "express";

const router = express.Router();

// Lofic for handling signup page logi

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/singup", (req, res) => {});

export default router;
