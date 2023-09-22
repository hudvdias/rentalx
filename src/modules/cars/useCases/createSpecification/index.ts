import { SpecificationRepository } from "../../repositories/implementations/memory/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);
