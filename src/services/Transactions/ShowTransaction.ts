import TransactionsRepository from '../../database/repositories/Transactions/transactions.repository';
import AppError from '../../../src/api/errors/AppError';

interface File {
  IniDate?: Date;
  FinDate?: Date;
  Cred_deb?: string;
}

class ShowTransaction {
  public async execute({ IniDate, FinDate, Cred_deb }: File) {
    const user = await TransactionsRepository.findByDate(IniDate, FinDate, Cred_deb);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}

export default ShowTransaction;
