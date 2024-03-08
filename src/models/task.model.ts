import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", taskSchema);
