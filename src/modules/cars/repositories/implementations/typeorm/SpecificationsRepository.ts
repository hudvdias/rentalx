import { Repository, getRepository } from "typeorm";
import { Specification } from "../../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../contracts/ISpecificationsRepository";
import { inject } from "tsyringe";

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  public async create(data: ICreateSpecificationDTO): Promise<Specification> {
    const { description, name } = data;
    const specification = this.repository.create({ name, description });
    await this.repository.save(specification);
    return specification;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });
    return specification;
  }
}
