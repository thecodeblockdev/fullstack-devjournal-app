import express from "express";

const router = express.Router();

// Lofic for handling signup page logi

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", (req, res) => {
    console.log(req.body);
    res.send("Signup data received");
});

export default router;
