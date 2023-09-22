import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) CategoriesRepository.INSTANCE = new CategoriesRepository();
    return CategoriesRepository.INSTANCE;
  }

  public create(data: ICreateCategoryDTO): Category {
    const { name, description } = data;
    const category = new Category();
    Object.assign(category, { name, description });
    this.categories.push(category);
    return category;
  }

  public list(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
