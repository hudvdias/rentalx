import { Router } from "express";
import { specificationsRoutes } from "./specifications.routes";
import { categoriesRoutes } from "./categories.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

export const routes = Router();

routes.use("/specifications", specificationsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/users", usersRoutes);
routes.use("/sessions", authenticateRoutes);
