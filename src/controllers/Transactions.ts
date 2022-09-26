import ImportTransaction from '../services/Transactions/ImportTransaction'
import { Request, Response } from 'express';
import ShowTransaction from '../services/Transactions/ShowTransaction';

class TransactionController {

    public async import(req: Request, res: Response): Promise<Response> {

        const { file } = req;
 
        const importTransaction = new ImportTransaction();
        
        await importTransaction.execute({file});

        return res.status(200).json();

    }

    public async show(req: Request, res: Response): Promise<Response> {

        const { IniDate, FinDate, Cred_deb } = req.body;
 
        const showTransaction = new ShowTransaction();
        
        const transactions = await showTransaction.execute({IniDate, FinDate, Cred_deb});

        return res.status(200).json(transactions);

    }

}

export default TransactionController;