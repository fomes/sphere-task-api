import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  desc: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", taskSchema);
