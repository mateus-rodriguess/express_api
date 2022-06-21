import { Joi } from "celebrate";

const registerValidation = Joi.object().keys({
	firstName: Joi.string().min(1).max(40).required(),
	lastName: Joi.string().min(1).max(40).required(),
	email: Joi.string().email().required(),
	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.min(8)
		.required(),
	repeat_password: Joi.ref("password"),
});

const loginValidation = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export { registerValidation, loginValidation };
