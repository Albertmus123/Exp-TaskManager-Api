import express from "express";
import {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const taskRouter = express.Router();

taskRouter.get("/", verifyToken, authorizeRoles("user"), getAllTask);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", verifyToken, authorizeRoles("admin"), createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
