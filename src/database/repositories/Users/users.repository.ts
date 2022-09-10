import AppDataSource from '../..';
import Users from '../../models/Users';

const UsersRepository = AppDataSource.getRepository(Users).extend({});

export default UsersRepository;
