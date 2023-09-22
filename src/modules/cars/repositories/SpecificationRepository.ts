import { Specification } from "../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  specifications: Specification[];

  constructor() {
    this.specifications = [];
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
