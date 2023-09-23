import { ICreateCarDTO } from "@/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@/modules/cars/repositories/contracts/ICarsRepository";
import { Car } from "../entities/Car";
import { Repository, getRepository } from "typeorm";

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  public async create(data: ICreateCarDTO): Promise<Car> {
    const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = data;
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    await this.repository.save(car);
    return car;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ where: { license_plate } });
    return car;
  }
}
