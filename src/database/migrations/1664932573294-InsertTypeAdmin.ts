import { MigrationInterface, QueryRunner } from 'typeorm';

export default class InsertTypeAdmin1664932573294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO USERTYPES(USERTYPE, DESCRIPTION) VALUES (1, "Admin")');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM USERTYPES WHERE USERTYPE = 1');
  }
}
