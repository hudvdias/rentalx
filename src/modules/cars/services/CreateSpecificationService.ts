import { Specification } from "../models/Specification";
import { SpecificationRepository } from "../repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  private specificationRepository: SpecificationRepository;

  constructor(specificationRepository: SpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  public execute(data: IRequest): Specification {
    const { name, description } = data;
    const specificationAlreadyExists = this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) throw new Error("Specification already Exists.");
    const specification = this.specificationRepository.create({ name, description });
    return specification;
  }
}
