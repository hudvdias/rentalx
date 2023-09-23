import { AppError } from "@/shared/errors/AppError";
import { ICarsRepository } from "../../repositories/contracts/ICarsRepository";

interface IRequest {
  name: string;
  description: string;
  daily_rate: Number;
  license_plate: string;
  fine_amount: Number;
  brand: string;
  category_id: string;
}

export class CreateCarUseCase {
  private carsRepository: ICarsRepository;

  constructor(carsRepository: ICarsRepository) {
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
