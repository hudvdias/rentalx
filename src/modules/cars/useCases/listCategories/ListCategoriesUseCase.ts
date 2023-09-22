import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/typeorm/CategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(@inject("CategoriesRepository") categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
