import { Request, Response } from "express";
import { Task } from "../models/task.model";
import { isValidObjectId } from "mongoose";

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid task ID." });
  } else {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!task) {
        res.status(404).json({ error: "Task not found." });
      } else {
        res.status(200).json(task);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid task ID." });
  } else {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);

      if (!task) {
        res.status(404).json({ error: "Task not found." });
      } else {
        res.status(204).end();
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
