import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/contracts/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/typeorm/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/contracts/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/typeorm/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
