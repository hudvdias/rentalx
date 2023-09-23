import { ICreateSpecificationDTO } from "../../../dtos/ICreateSpecificationDTO";
import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../contracts/ISpecificationsRepository";

export class MemorySpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  private static INSTANCE: MemorySpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): MemorySpecificationsRepository {
    if (!MemorySpecificationsRepository.INSTANCE)
      MemorySpecificationsRepository.INSTANCE = new MemorySpecificationsRepository();
    return MemorySpecificationsRepository.INSTANCE;
  }

  public async create(data: ICreateSpecificationDTO): Promise<Specification> {
    const { name, description } = data;
    const specification = new Specification();
    Object.assign(specification, { name, description });
    this.specifications.push(specification);
    return specification;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }
}
