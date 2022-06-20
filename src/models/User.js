import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
		require: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		maxlength: 25,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const User = mongoose.model("User", userSchema);
export default User;
