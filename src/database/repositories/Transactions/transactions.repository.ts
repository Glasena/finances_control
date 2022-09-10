import AppDataSource from '../..';
import Transactions from '../../models/Transactions';

const TransactionsRepository = AppDataSource.getRepository(Transactions).extend({
    async findByDate(IniDate?: Date, FinDate?: Date, Cred_deb?: String): Promise<Transactions[] | null> {
        
        let and = ""; 
        let where = "";

        if (IniDate) {
          where = "transactions.date >= :IniDate";
          and = " AND ";
        }

        if (FinDate) {
          where = where + and +  "transactions.date <= :FinDate";
          and = " AND ";
        }

        if (Cred_deb) {
          where = where + and + "transactions.cred_deb = :Cred_deb";
        }

        const transactions = await this.createQueryBuilder("transactions").where(where, { IniDate, FinDate, Cred_deb }).printSql().getMany();

        return transactions;
      }
});

export default TransactionsRepository;
