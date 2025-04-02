import mongoose from "mongoose";

export const databaseConn = (uri) => {
  mongoose.connect(uri);
};
