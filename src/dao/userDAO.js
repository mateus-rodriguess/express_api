import User from "../models/User.js";

const getAllUsers = async (limit = 10) => {
  try {
    const user = await User.find().limit(limit);
    return user;
  } catch (error) {
    return;
  }
};

const getOneuser = async (idUser) => {
  try {
    const user = await User.findById(idUser);
    return user;
  } catch (error) {
    return;
  }
};

const createNewUser = async (dataUser) => {
  try {
    const user = await new User(dataUser);
    await user.save();
    return user;
  } catch (error) {
    return;
  }
};

const updateOneUser = async (idUser, dataUser) => {
  try {
    const user = await User.findById(idUser);
    if (user) {
      user.update(dataUser);
      return user;
    } else {
      return;
    }
  } catch (error) {}
};

const deleteOneUser = async (idUser) => {
  try {
    const user = await User.findById(idUser);
    if (user) {
      await user.delete();
      return user;
    } else {
      return;
    }
  } catch (error) {}
};

export const user = {
  getAllUsers,
  getOneuser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
