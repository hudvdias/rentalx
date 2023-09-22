import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementations/typeorm/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(listCategoryUseCase);
