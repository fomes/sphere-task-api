import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController";

export const taskRoutes = express.Router();

taskRoutes.get("/tasks", getTasks);
taskRoutes.post("/tasks", createTask);
taskRoutes.patch("/tasks/:id", updateTask);
taskRoutes.delete("/tasks/:id", deleteTask);
