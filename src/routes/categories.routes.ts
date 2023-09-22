import { Router } from "express";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", (request, response) => {
  listCategoriesController().handle(request, response);
});
