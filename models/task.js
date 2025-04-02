import mongoose from "mongoose";
import { User } from "./user.js";

// Define the Post schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  timestamp: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
});

export const Task = mongoose.model("Task", taskSchema);
