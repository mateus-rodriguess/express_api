import User from "../models/User.js";

const getAllUsers = async (limit = 10) => {
  try {
    user = await User.find().limit(limit);
    return user;
  } catch {
    return [];
  }
};

export const user = {
  getAllUsers,
};
