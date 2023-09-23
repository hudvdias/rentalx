import { ICreateCarDTO } from "@/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../contracts/ICarsRepository";
import { Car } from "@/modules/cars/infra/typeorm/entities/Car";

export class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  public async create(data: ICreateCarDTO): Promise<Car> {
    const { brand, category_id, daily_rate, description, fine_amount, license_plate, name } = data;
    const car = new Car();
    Object.assign(car, { brand, category_id, daily_rate, description, fine_amount, license_plate, name });
    this.cars.push(car);
    return car;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate);
    return car;
  }
}
