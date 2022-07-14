const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const responsibilitySchema = new Schema({
task: { type: mongoose.Types.ObjectId, ref: "Todo" },
responsability: { type: String, required: true, minLength: 2 },

});

const ResponsibilityModel = model("Responsability", responsibilitySchema);

module.exports = ResponsibilityModel;