import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementations/typeorm/CategoriesRepository";

export const listCategoriesController = () => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(listCategoryUseCase);
  return listCategoriesController;
};
