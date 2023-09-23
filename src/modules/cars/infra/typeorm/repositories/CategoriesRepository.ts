import { Repository, getRepository } from "typeorm";
import { Category } from "@/modules/cars/infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "@/modules/cars/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@/modules/cars/repositories/contracts/ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const { name, description } = data;
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
    return category;
  }

  public async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  public async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}
