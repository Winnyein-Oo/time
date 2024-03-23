import express from "express";
import cors from "cors";
import userRouter from "./users/users.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("", (req, res) => {
  res.status(200).send("Hello, world!");
});

export default app;
