const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/post.routes");
const dotenv = require("dotenv").config();
const port = 5000;

const app = express();

// Connect DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", postRoutes);

// Launch server
app.listen(port, console.log("server started to port " + port));
