import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTransactions1661708046609
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "(uuid())",
          },
          {
            name: "value",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "date",
            type: "timestamp",
          },
          {
            name: "cred_deb",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
