import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import "./shared/container";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) return response.status(error.statusCode).json({ message: error.message });
  response.status(500).json({ message: `Internal server error - ${error.message}` });
});

app.listen(3333, () => console.log("🚀 Server is running!"));
