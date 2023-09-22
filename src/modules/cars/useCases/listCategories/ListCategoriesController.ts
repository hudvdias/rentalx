import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { container } from "tsyringe";

export class ListCategoriesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listCategory = container.resolve(ListCategoriesUseCase);
    const categories = await listCategory.execute();
    return response.status(200).json(categories);
  }
}
