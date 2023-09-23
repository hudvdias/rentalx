import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveUsernameFromUsers1695431775533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const column = new TableColumn({ name: "username", type: "varchar" });
    await queryRunner.addColumn("users", column);
  }
}
