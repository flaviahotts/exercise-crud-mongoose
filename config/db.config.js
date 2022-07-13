const mongoose = require("mongoose");

async function connect() {
try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB connected to: ", dbConnect.connection.name);
} catch (err) {
    console.error("DB connection error", err);
}
}

module.exports = connect;