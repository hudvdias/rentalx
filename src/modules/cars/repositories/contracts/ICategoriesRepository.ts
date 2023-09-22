import { Category } from "../../models/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category;
}
