import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to db successfully");
  } catch (error) {
    console.log('db error');
  }
};

export default dbConnect;