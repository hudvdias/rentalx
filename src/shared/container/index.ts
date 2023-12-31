import { container } from "tsyringe";
import { ICategoriesRepository } from "@/modules/cars/repositories/contracts/ICategoriesRepository";
import { ISpecificationsRepository } from "@/modules/cars/repositories/contracts/ISpecificationsRepository";
import { IUsersRepository } from "@/modules/accounts/repositories/contracts/IUsersRepository";
import { CategoriesRepository } from "@/modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@/modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UsersRepository } from "@/modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ICarsRepository } from "@/modules/cars/repositories/contracts/ICarsRepository";
import { CarsRepository } from "@/modules/cars/infra/typeorm/repositories/CarsRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
