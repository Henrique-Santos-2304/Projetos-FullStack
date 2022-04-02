import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMeals1644673518561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "meals",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "protein",
            type: "varchar",
          },
          {
            name: "quantity_proteins",
            type: "varchar",
          },
          {
            name: "carbohydrate",
            type: "varchar",
          },
          {
            name: "quantity_carbohydrate",
            type: "varchar",
          },
          {
            name: "vegetable",
            type: "varchar",
          },
          {
            name: "quantity_vegetable",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "user_id",
            type: "uuid",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("meals");
  }
}
