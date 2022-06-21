import dotenv from "dotenv";
import app from "./src/config/app.js";
import connectToDatabase from "./src/config/db.js";

dotenv.config();
connectToDatabase();
const PORT = 3000;

app.listen(PORT, function () {
	console.log("http://localhost:" + PORT);
});
