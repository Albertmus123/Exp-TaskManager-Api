import { Task } from "../models/task.js";

export const createTask = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.id;
  await Task.create({
    title,
    user: userId,
  });
  res.json({
    message: "Task created Successfull!",
  });
};
export const getAllTask = async (req, res) => {
  const task = await Task.find().exec();
  res.json(task);
};
export const getTaskById = async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findById(taskId).exec();
  if (!task) {
    res.status(404).json({
      msg: "Task doesn't exist",
    });
  }
  res.json(task);
};
export const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const updatedData = req.body;
  const task = await Task.findById(taskId).exec();
  if (!task) {
    return res.status(404).json({
      msg: "Task doesn't exist",
    });
  }
  Object.assign(task, updatedData);
  await task.save();
  res.status(200).json({
    task,
  });
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({
        msg: "Task doesn't exist",
      });
    }

    res.status(200).json({
      msg: "Task deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Server error",
      error: err.message,
    });
  }
};
