
import express, { json, urlencoded } from "express";
import usersRouter from "../routes/users.js";


var app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// middleware
app.use((req, res, next)=>{
    console.log('Request Type:', req.method + " - " + res.statusCode);
    next();
})

export default app

