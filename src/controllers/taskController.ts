import { Request, Response } from "express";
import {
  createTask,
  findTaskDone,
  findTaskTodo,
  removeTask,
  updateTask,
} from "../services/taskService";

export const postTask = async (req: Request, res: Response) => {
  await createTask(req, res);
};

export const getTasksToDo = async (req: Request, res: Response) => {
  await findTaskTodo(req, res);
};

export const getTasksDone = async (req: Request, res: Response) => {
  await findTaskDone(req, res);
};

export const patchTask = async (req: Request, res: Response) => {
  await updateTask(req, res);
};

export const deleteTask = async (req: Request, res: Response) => {
  await removeTask(req, res);
};
