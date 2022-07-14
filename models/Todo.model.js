const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const todoSchema = new Schema({
task: { type: String, required: true, trim: true, minLength: 2, },
responsibility: [{ type: mongoose.Types.ObjectId, ref: "Responsibility" }],
});

const TodoModel = model("Todo", todoSchema);

module.exports = TodoModel;