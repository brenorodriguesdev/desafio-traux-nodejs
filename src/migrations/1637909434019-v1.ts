import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class v11637909434019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "login",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "product",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "category",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                }
            ]
        }), true);

        await queryRunner.addColumn("product", new TableColumn({
            name: "idCategory",
            type: "int"
        }));

        await queryRunner.createForeignKey("product", new TableForeignKey({
            columnNames: ["idCategory"],
            referencedColumnNames: ["id"],
            referencedTableName: "category",
            onDelete: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("login");
        const table = await queryRunner.getTable("product");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("idCategory") !== -1);
        await queryRunner.dropForeignKey("product", foreignKey);
        await queryRunner.dropColumn("product", "idCategory");
        await queryRunner.dropTable("product");
        await queryRunner.dropTable("category");
    }

}
