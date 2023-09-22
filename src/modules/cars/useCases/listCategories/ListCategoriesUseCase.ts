import { Category } from "../../models/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

export class ListCategoriesUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
