require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.json({ "Message": "Working" });
});

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.once("open", () => console.log("Connected to the DB!!"));
db.on("error", (errorMessage) => console.log(errorMessage));

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}/`);
});
