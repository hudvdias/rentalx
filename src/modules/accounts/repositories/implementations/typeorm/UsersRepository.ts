import { Repository, getRepository } from "typeorm";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../contracts/IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const { name, email, password, driver_license } = data;
    const user = this.repository.create({ name, email, password, driver_license });
    await this.repository.save(user);
    return user;
  }
}
