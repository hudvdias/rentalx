import { container } from "tsyringe";
import { ICategoriesRepository } from "@/modules/cars/repositories/contracts/ICategoriesRepository";
import { CategoriesRepository } from "@/modules/cars/repositories/implementations/typeorm/CategoriesRepository";
import { ISpecificationsRepository } from "@/modules/cars/repositories/contracts/ISpecificationsRepository";
import { SpecificationsRepository } from "@/modules/cars/repositories/implementations/typeorm/SpecificationsRepository";
import { IUsersRepository } from "@/modules/accounts/repositories/contracts/IUsersRepository";
import { UsersRepository } from "@/modules/accounts/repositories/implementations/typeorm/UsersRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
