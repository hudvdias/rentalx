import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/contracts/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  private categoriesRepository: ICategoryRepository;

  constructor(categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(data: IRequest): Promise<Category> {
    const { name, description } = data;
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) throw new Error("Category already exists.");
    const category = await this.categoriesRepository.create({ name, description });
    return category;
  }
}
