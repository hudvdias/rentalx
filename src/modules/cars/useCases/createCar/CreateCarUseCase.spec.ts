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
  });
});
