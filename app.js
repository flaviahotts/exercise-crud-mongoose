const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

const app = express();

app.use(express.json());

const todoRouter = require("./routes/todo.routes")
app.use("/todo", todoRouter);

const responsabilityRouter = require("./routes/responsability.routes");
app.use("/responsability", responsabilityRouter);

app.listen(Number(process.env.PORT), () => {
console.log(`Server up and running at port ${process.env.PORT}`);
});