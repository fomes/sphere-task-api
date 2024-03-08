import express from "express";
import {
  createTask,
  deleteTask,
  getTasksToDo,
  getTasksDone,
  updateTask,
  getAllTasks,
} from "../controllers/taskController";

export const taskRoutes = express.Router();

taskRoutes.post("/tasks/new", createTask);
taskRoutes.get("/tasks/todo", getTasksToDo);
taskRoutes.get("/tasks/done", getTasksDone);
taskRoutes.get("/tasks/all", getAllTasks);
taskRoutes.patch("/tasks/:id", updateTask);
taskRoutes.delete("/tasks/:id", deleteTask);
