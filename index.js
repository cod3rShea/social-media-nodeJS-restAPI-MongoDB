const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
	console.log("conected to server");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
const userRoute = require("./routes/users");

app.use("/api/users", userRoute);

app.listen(8800, () => {
	console.log("Backend server is running");
});
