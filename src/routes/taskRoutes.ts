import express from "express";
import {
  createTask,
  deleteTask,
  getTasksToDo,
  getTasksDone,
  updateTask,
  getAllTasks,
} from "../controllers/taskController";
import { taskSchema, validate } from "../schema/yup";

export const taskRoutes = express.Router();

taskRoutes.post("/tasks/new", validate(taskSchema), createTask);
taskRoutes.get("/tasks/todo", getTasksToDo);
taskRoutes.get("/tasks/done", getTasksDone);
taskRoutes.get("/tasks/all", getAllTasks);
taskRoutes.patch("/tasks/:id", updateTask);
taskRoutes.delete("/tasks/:id", deleteTask);
