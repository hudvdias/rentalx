import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  private createCategory: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategory = createCategoryUseCase;
  }

  public async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const category = await this.createCategory.execute({ name, description });
    return response.status(201).json(category);
  }
}
