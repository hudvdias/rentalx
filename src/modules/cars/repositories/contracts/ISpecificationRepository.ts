import { Specification } from "../../entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create(data: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}
