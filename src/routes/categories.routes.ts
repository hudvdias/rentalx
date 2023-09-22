import { Router } from "express";
import { v4 } from "uuid";

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = { id: v4(), name, description };
  categories.push(category);
  return response.status(201).json(category);
});
