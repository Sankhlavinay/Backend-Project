import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    console.log(
      `/n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
