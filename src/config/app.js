import express, { json, urlencoded } from "express";
import { errors } from "celebrate";
import usersRouter from "../routes/api/users.js";

var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

// app.use('/', indexRouter);
app.use("/users", usersRouter);

// middleware
app.use((req, res, next) => {
	console.log("Request Type:", req.method + " - " + res.statusCode);
	next();
});

app.use(errors());
export default app;
