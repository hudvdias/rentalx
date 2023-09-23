import { User } from "@/modules/accounts/infra/typeorm/entities/User";
import { hash } from "bcrypt";
import { MigrationInterface, QueryRunner, Repository, getRepository } from "typeorm";
import { v4 } from "uuid";

export class CreateUserAdmin1695476133585 implements MigrationInterface {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await hash("Pass#123", 6);
    const adminData = {
      id: v4(),
      name: "admin",
      email: "admin@rentalx.com",
      driver_license: "123456",
      password,
      admin: true,
    };
    const admin = this.repository.create(adminData);
    await this.repository.save(admin);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const admin = await this.repository.findOne({ where: { email: "admin@rentalx.com" } });
    await this.repository.delete(admin.id);
  }
}
