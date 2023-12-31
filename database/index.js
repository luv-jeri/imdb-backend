const mongoose = require("mongoose");

const { DATABASE } = process.env;

mongoose.connect(DATABASE);

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to database", err);
});

module.exports = mongoose.connection;
