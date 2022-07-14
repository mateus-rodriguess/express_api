import {user} from "../database/user.js"

const getAllusers = () => {
  const allUsers = user.getAllUsers()
  return allUsers
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
