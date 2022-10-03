import { Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import LoginController from '../../controllers/Login';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', loginController.login);
export default loginRouter;
