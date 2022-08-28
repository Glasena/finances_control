import AppDataSource from '..';
import Transactions from '../models/Transactions';

const TransactionsRepository = AppDataSource.getRepository(Transactions).extend({});

export default TransactionsRepository;
