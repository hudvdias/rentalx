import { CreateCarController } from "@/modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { EnsureAdmin } from "../middlewares/ensureAdmin";

export const carsRoutes = Router();
const createCarController = new CreateCarController();

carsRoutes.post("/", ensureAuthenticated, EnsureAdmin, createCarController.handle);
