import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = request.body;
    const createCar = container.resolve(CreateCarUseCase);
    const car = await createCar.execute({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    return response.status(201).json(car);
  }
}
