import { userService } from "../../services/userService.js";

const getAllusers = async (req, res) => {
  const allUsers = userService.getAllusers();

  res.status(200).json({ status: "OK", data: allUsers });
};

const getOneUser = async (req, res) => {
  const user = userService.getOneUser();
  res.send("get user");
};

const createNewUser = async (req, res) => {
  const createuser = userService.createNewUser();
  res.send("Create user");
};

const updateOneUser = async (req, res) => {
  const updateuser = userService.updateOneUser();
  res.send("update user");
};

const deleteOneUser = async (req, res) => {
  const deleteUser = userService.deleteOneUser();
  res.send("delete user");
};

export const userController = {
  getAllusers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
