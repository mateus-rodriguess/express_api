import express, { json, urlencoded } from "express";
import { errors } from "celebrate";
import { router as v1UsersRouter } from "../v1/routes/users.js";
import bodyParser from "body-parser";

var app = express();

app.use(urlencoded({ extended: false }));

app.use(bodyParser.json());
// app.use('/', indexRouter);
app.use("/api/v1/users", v1UsersRouter);

// middleware
app.use((req, res, next) => {
  console.log("Request Type:", req.method + " - " + res.statusCode);
  next();
});

app.use(errors());
export default app;
