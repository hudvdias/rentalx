import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "../typeorm/index";
import "../../container";
import { routes } from "./routes";
import { AppError } from "@/shared/errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) return response.status(error.statusCode).json({ message: error.message });
  console.error(error);
  return response.status(500).json({ message: `Internal server error - ${error.message}` });
});

app.listen(3333, () => console.log("🚀 Server is running!"));
