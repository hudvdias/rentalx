import { Category } from "../models/Category";
import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  private categoriesRepository: ICategoryRepository;

  constructor(categoriesRepository: ICategoryRepository) {
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
