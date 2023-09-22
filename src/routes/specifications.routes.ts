import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

export const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecification = new CreateSpecificationService(specificationRepository);
  const specification = createSpecification.execute({ name, description });
  return response.status(201).json(specification);
});
