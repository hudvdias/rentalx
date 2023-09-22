import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/typeorm/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  private specificationRepository: SpecificationsRepository;

  constructor(specificationRepository: SpecificationsRepository) {
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
