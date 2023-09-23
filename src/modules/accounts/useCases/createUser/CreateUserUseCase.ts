import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/contracts/IUsersRepository";
import { User } from "../../entities/User";

interface IRequest {
  name: string;
  email: string;
  password: string;
  username: string;
  driver_license: string;
}

@injectable()
export class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(@inject("UsersRepository") usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(data: IRequest): Promise<User> {
    const { name, email, password, username, driver_license } = data;
    const user = await this.usersRepository.create({ name, email, password, username, driver_license });
    return user;
  }
}
