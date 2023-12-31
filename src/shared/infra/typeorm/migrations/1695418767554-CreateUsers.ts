import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1695418767554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: "users",
      columns: [
        { name: "id", type: "uuid", isPrimary: true },
        { name: "name", type: "varchar" },
        { name: "username", type: "varchar" },
        { name: "password", type: "varchar" },
        { name: "email", type: "varchar" },
        { name: "driver_license", type: "varchar" },
        { name: "admin", type: "boolean" },
        { name: "created_at", type: "timestamp", default: "now()" },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
