import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";
import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../contracts/ICategoriesRepository";

export class MemoryCategoriesRepository implements ICategoriesRepository {
  categories: Category[];

  private static INSTANCE: MemoryCategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): MemoryCategoriesRepository {
    if (!MemoryCategoriesRepository.INSTANCE) MemoryCategoriesRepository.INSTANCE = new MemoryCategoriesRepository();
    return MemoryCategoriesRepository.INSTANCE;
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const { name, description } = data;
    const category = new Category();
    Object.assign(category, { name, description });
    this.categories.push(category);
    return category;
  }

  public async list(): Promise<Category[]> {
    return this.categories;
  }

  public async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
