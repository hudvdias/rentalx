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
    throw new Error("Method not implemented.");
  }
}
