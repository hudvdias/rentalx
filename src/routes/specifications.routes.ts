import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

export const specificationsRoutes = Router();
const createSpecificationControler = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationControler.handle);
