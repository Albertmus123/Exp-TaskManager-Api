import express from "express";
import {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.get("/", verifyToken,getAllTask);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
