import 'dotenv/config';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { MysqlConnectionCredentialsOptions } from 'typeorm/driver/mysql/MysqlConnectionCredentialsOptions';
import Transactions from './models/Transactions';
import Users from './models/Users';
import migrations from './migrations';

const {
  CreateTransactions,
  CreateUsers
} = migrations;

const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE as MysqlConnectionOptions['type'],
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as MysqlConnectionCredentialsOptions['port'],
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Transactions, Users],
  timezone: 'GMT%2B8',
  migrations: [
    CreateTransactions,
    CreateUsers
  ],
  subscribers: [],
  logging: true
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
