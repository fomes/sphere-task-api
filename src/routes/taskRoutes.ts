import express from "express";
import {
  deleteTask,
  getTasksDone,
  getTasksToDo,
  patchTask,
  postTask,
} from "../controllers/taskController";
import { taskSchema, validate } from "../schema/task";

export const taskRoutes = express.Router();

taskRoutes.post("/tasks/new", validate(taskSchema), postTask);
taskRoutes.get("/tasks/todo", getTasksToDo);
taskRoutes.get("/tasks/done", getTasksDone);
taskRoutes.patch("/tasks/:id", patchTask);
taskRoutes.delete("/tasks/:id", deleteTask);
