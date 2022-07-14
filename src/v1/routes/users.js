import express from "express";
import User from "../../models/User.js";
import {
  loginValidation,
  registerValidation,
} from "../../services/validation/userValidation.js";


import {userController} from "../controllers/userController.js"

const router = express.Router();

router.get("/", userController.getAllusers);

router.get("/:userId", userController.getOneUser);

router.post("/", userController.createNewUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userid", userController.deleteOneUser);

export { router };
