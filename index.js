import express from "express";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import taskRouter from "./routes/taskRoute.js";
import { databaseConn } from "./db/connect.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use("/user", userRouter);
app.use("/task", taskRouter);

const start = () => {
  databaseConn(process.env.DATABASE_URI);

  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
};

start();
