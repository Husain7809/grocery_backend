import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.set('strictQuery', false);
  const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/razor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongodb is connected with ${connection.host}`);
};