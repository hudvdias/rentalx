import { Category } from "../models/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
}
