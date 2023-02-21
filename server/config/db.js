const { default: mongoose } = require("mongoose");
const moogoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    moogoose.connect(process.env.MONGO_URI, () => {
      console.log("Mongo connected");
    });
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
