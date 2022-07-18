import { user } from "../dao/userDAO.js";

const getAllusers = () => {
  const allUsers = user.getAllUsers(10);
  console.log(allUsers);
  return allUsers;
};

const getOneUser = () => {
  return;
};

const createNewUser = () => {
  return;
};

const updateOneUser = () => {
  return;
};

const deleteOneUser = () => {
  return;
};

export const userService = {
  getAllusers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
