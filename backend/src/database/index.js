import mongoose from "mongoose";
import dotenv from "dotenv";
let connection;
dotenv.config();

export const connect = async () => {
  if (connection) {
    console.log("already connected to database");
    return connection;
  }
  try {
    connection = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
    return connection;
  } catch (error) {
    console.error(`error connecting to database - ${error.message}`);
  }
};
