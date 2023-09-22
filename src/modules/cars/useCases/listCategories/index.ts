import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementations/memory/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(listCategoryUseCase);
