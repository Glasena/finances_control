import 'dotenv/config';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { MysqlConnectionCredentialsOptions } from 'typeorm/driver/mysql/MysqlConnectionCredentialsOptions';
//import Address from './models/Address';

/*const {
  CreateCustomers,
  CreateUsers,
  CreateAddresses,
  CreatePackages,
  CreateProducts,
  CreateStock,
  CreateOrderItems,
  CreateOrders,
  ChangeAddressComplementColumn,
  DropAddressFkCustomers,
  SetCustomerAdressIdNullable,
  SetCustomerRgNullable,
  CreateCustomerColumnBirthDate,
} = migrations;*/

const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE as MysqlConnectionOptions['type'],
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as MysqlConnectionCredentialsOptions['port'],
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  //entities: [Customer, Address, User],
  timezone: 'GMT%2B8',
  /*migrations: [
    CreateUsers,
    CreateAddresses,
    CreateCustomers,
    CreatePackages,
    CreateProducts,
    CreateStock,
    CreateOrderItems,
    CreateOrders,
    ChangeAddressComplementColumn,
    DropAddressFkCustomers,
    SetCustomerAdressIdNullable,
    SetCustomerRgNullable,
    CreateCustomerColumnBirthDate,
  ],*/
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
