import dotenv from "dotenv";
import app from "./config/app.js";
import connectToDatabase from "./database/db.js";

dotenv.config();
connectToDatabase();

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log("API is listening on port: " + PORT);
});
