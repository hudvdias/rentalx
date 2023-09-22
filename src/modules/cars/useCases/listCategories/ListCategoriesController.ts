import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  private listCategory: ListCategoriesUseCase;

  constructor(listCategoryUseCase: ListCategoriesUseCase) {
    this.listCategory = listCategoryUseCase;
  }

  public handle(request: Request, response: Response): Response {
    const categories = this.listCategory.execute();
    return response.status(200).json(categories);
  }
}
