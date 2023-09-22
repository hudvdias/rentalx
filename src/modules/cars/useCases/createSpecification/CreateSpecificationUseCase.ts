import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from "../../repositories/implementations/typeorm/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
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
