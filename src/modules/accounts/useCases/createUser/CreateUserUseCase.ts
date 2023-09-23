import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/contracts/IUsersRepository";
import { User } from "../../entities/User";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

@injectable()
export class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(@inject("UsersRepository") usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: IRequest): Promise<User> {
    const { name, email, password, driver_license } = data;
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) throw new AppError("Email already registered.");
    const passwordHash = await hash(password, 6);
    const user = await this.usersRepository.create({ name, email, password: passwordHash, driver_license });
    return user;
  }
}
