import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/memory/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
export const createCategoryController = new CreateCategoryController(createCategoryUseCase);
