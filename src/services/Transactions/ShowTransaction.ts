import TransactionsRepository from '../../../src/database/repositories/transactions.repository';
import AppError from '../../../src/api/errors/AppError';
const readline = require('readline');

interface File {
    IniDate?: Date,
    FinDate?: Date,
    Cred_deb?: String
}

class ShowTransaction {

    public async execute({IniDate, FinDate, Cred_deb}: File) {
        
    const user = await TransactionsRepository.findByDate(IniDate, FinDate, Cred_deb);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;

    }

}

export default ShowTransaction;