import { inject, injectable } from "tsyringe";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { AppError } from "@/shared/errors/AppError";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationsRepository";

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
