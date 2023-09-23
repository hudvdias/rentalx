import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/typeorm/SpecificationsRepository";
import { AppError } from "@/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  private specificationRepository: SpecificationsRepository;

  constructor(@inject("SpecificationsRepository") specificationRepository: SpecificationsRepository) {
    this.specificationRepository = specificationRepository;
  }

  public async execute(data: IRequest): Promise<Specification> {
    const { name, description } = data;
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) throw new AppError("Specification already Exists.");
    const specification = await this.specificationRepository.create({ name, description });
    return specification;
  }
}
