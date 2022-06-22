import express from "express";
import User from "../../models/User.js";
import {
    loginValidation,
    registerValidation,
} from "../../services/validation/userValidation.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        if (users.length > 0) {
            res.status(200).json(users);
        }
        res.status(404).json({ message: "Not found" });
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
});

export default router;
