import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://sureshmundargi:9820327499@cluster0.owwjq.mongodb.net/virtus-interior-products"
    ).then(()=> console.log("DB connected"));
}