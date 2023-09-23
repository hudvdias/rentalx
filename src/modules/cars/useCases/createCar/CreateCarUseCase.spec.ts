import { AppError } from "@/shared/errors/AppError";
import { ICarsRepository } from "../../repositories/contracts/ICarsRepository";
import { CarsRepositoryInMemory } from "../../repositories/implementations/inMemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCar: CreateCarUseCase;
let carsRepository: ICarsRepository;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCar = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const data = {
      name: "Palio",
      description: "Carro Popular",
      daily_rate: 50,
      license_plate: "ABD-1234",
      fine_amount: 75,
      brand: "FIAT",
      category_id: "",
    };

    const car = await createCar.execute(data);

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with already used license plate", async () => {
    const data = {
      name: "Palio",
      description: "Carro Popular",
      daily_rate: 50,
      license_plate: "ABD-1234",
      fine_amount: 75,
      brand: "FIAT",
      category_id: "",
    };

    const data_copy = {
      name: "Siena",
      description: "Carro Popular",
      daily_rate: 70,
      license_plate: "ABD-1234",
      fine_amount: 105,
      brand: "FIAT",
      category_id: "",
    };

    expect(async () => {
      await createCar.execute(data);
      await createCar.execute(data_copy);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should new cars have availability", async () => {
    const data = {
      name: "Palio",
      description: "Carro Popular",
      daily_rate: 50,
      license_plate: "ABD-1234",
      fine_amount: 75,
      brand: "FIAT",
      category_id: "",
    };

    const car = await createCar.execute(data);

    expect(car.available).toBe(true);
  });
});
