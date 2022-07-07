const mongoose = require("mongoose");

const mogoUrl =
  "mongodb+srv://mohit:Rohit123@cluster0.hmi0p.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mogoUrl);

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo DB");
});
mongoose.connection.on("error", () => {
  console.log("Not Connected");
});
