import { Request, Response, Router } from 'express';
import transactionsRouter from './transaction.routes';

const routes = Router();

routes.use('/transaction', transactionsRouter);
routes.get('/', (req: Request, res: Response) => res.json({ message: 'Server online!' }));

export default routes;
