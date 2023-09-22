import { Specification } from "../../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../contracts/ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    return SpecificationsRepository.INSTANCE;
  }

  public create(data: ICreateSpecificationDTO): Specification {
    const { name, description } = data;
    const specification = new Specification();
    Object.assign(specification, { name, description });
    this.specifications.push(specification);
    return specification;
  }

  public findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }
}
