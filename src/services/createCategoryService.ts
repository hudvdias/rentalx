import { Category } from "../models/category";
import { CategoriesRepository } from "../repositories/categoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public execute(data: IRequest): Category {
    const { name, description } = data;
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) throw new Error("Category already exists.");
    const category = this.categoriesRepository.create({ name, description });
    return category;
  }
}
