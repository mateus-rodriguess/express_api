import dotenv from "dotenv";
import app from "./config/app.js";
import connectToDatabase from "./config/db.js";

dotenv.config();
connectToDatabase();
const PORT = 3000;

app.listen(PORT, function () {
  console.log("Servidor ON", PORT);
});
