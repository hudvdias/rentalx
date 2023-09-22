import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/typeorm/CategoriesRepository";

export class ListCategoriesUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
