import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});
