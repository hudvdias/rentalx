import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/contracts/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/typeorm/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
