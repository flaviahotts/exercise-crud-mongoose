const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

const app = express();

app.use(express.json());

app.listen(Number(process.env.PORT), () => {
console.log(`Server up and running at port ${process.env.PORT}`);
});