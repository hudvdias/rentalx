import { Repository, getRepository } from "typeorm";
import { Category } from "../../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../../contracts/ICategoriesRepository";

export class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) CategoriesRepository.INSTANCE = new CategoriesRepository();
    return CategoriesRepository.INSTANCE;
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const { name, description } = data;
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
    return category;
  }

  public async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  public async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}
