const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    //mongoose.connect(mongoURI);
    mongoose.connect('mongodb://mongo:27017/yourdb')

    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
