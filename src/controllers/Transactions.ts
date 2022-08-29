import ImportTransaction from '../services/Transactions/ImportTransaction'
import { Request, Response } from 'express';

class TransactionController {

    public async import(req: Request, res: Response): Promise<Response> {

        const { file } = req;
 
        const importTransaction = new ImportTransaction();
        
        await importTransaction.execute({file});

        return res.status(200).json();

    }


}

export default TransactionController;