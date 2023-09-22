import { Router } from "express";
import { specificationsRoutes } from "./specifications.routes";
import { categoriesRoutes } from "./categories.routes";

export const routes = Router();

routes.use(specificationsRoutes);
routes.use(categoriesRoutes);
