const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
task: { type: String, required: true, trim: true },

});

const TodoModel = model("Todo", todoSchema);

module.exports = TodoModel;