import express from "express";
import {
  createTask,
  deleteTask,
  getTasksToDo,
  getTasksDone,
  updateTask,
} from "../controllers/taskController";
import { taskSchema, validate } from "../schema/task";

export const taskRoutes = express.Router();

taskRoutes.post("/tasks/new", validate(taskSchema), createTask);
taskRoutes.get("/tasks/todo", getTasksToDo);
taskRoutes.get("/tasks/done", getTasksDone);
taskRoutes.patch("/tasks/:id", updateTask);
taskRoutes.delete("/tasks/:id", deleteTask);
