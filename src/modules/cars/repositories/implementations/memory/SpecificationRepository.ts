import { Specification } from "../../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../contracts/ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) SpecificationRepository.INSTANCE = new SpecificationRepository();
    return SpecificationRepository.INSTANCE;
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
