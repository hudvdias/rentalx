import { AppError } from "@/shared/errors/AppError";
import { ICarsRepository } from "../../repositories/contracts/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  daily_rate: Number;
  license_plate: string;
  fine_amount: Number;
  brand: string;
  category_id: string;
}

@injectable()
export class CreateCarUseCase {
  private carsRepository: ICarsRepository;

  constructor(@inject("CarsRepository") carsRepository: ICarsRepository) {
    this.carsRepository = carsRepository;
  }

  public async execute(data: IRequest) {
    const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = data;
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);
    if (carAlreadyExists) throw new AppError("Car already exists.");
    const car = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    return car;
  }
}
