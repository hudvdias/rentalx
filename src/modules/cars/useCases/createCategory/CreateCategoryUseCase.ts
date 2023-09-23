import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/contracts/ICategoriesRepository";
import { Category } from "../../infra/typeorm/entities/Category";
import { AppError } from "@/shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(@inject("CategoriesRepository") categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(data: IRequest): Promise<Category> {
    const { name, description } = data;
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) throw new AppError("Category already exists.");
    const category = await this.categoriesRepository.create({ name, description });
    return category;
  }
}
