import { Request, Response, Router } from 'express';
import transactionsRouter from './transaction.routes';
import userRouter from './user.routes';
import loginRouter from './login.routes';

const routes = Router();

routes.use('/transaction', transactionsRouter);
routes.use('/user', userRouter);
routes.use('/login', loginRouter);
routes.get('/', (req: Request, res: Response) => res.json({ message: 'Server online!' }));

export default routes;
