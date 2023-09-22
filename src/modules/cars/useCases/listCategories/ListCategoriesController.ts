import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  private listCategory: ListCategoriesUseCase;

  constructor(listCategoryUseCase: ListCategoriesUseCase) {
    this.listCategory = listCategoryUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategory.execute();
    return response.status(200).json(categories);
  }
}
