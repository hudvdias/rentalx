import { Repository, getRepository } from "typeorm";
import { User } from "@/modules/accounts/infra/typeorm/entities/User";
import { ICreateUserDTO } from "@/modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@/modules/accounts/repositories/contracts/IUsersRepository";

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

  public async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });
    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });
    return user;
  }
}
