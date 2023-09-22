import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from "tsyringe";

export class CreateCategoryController {
  public async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const createCategory = container.resolve(CreateCategoryUseCase);
    const category = await createCategory.execute({ name, description });
    return response.status(201).json(category);
  }
}
