import { Router } from "express";
import { CreateSpecificationController } from "@/modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@/shared/infra/http/middlewares/ensureAuthenticated";

export const specificationsRoutes = Router();
const createSpecificationControler = new CreateSpecificationController();

specificationsRoutes.post("/", ensureAuthenticated, createSpecificationControler.handle);
