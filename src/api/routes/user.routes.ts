import { Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import multer from "multer";
import UserController from '../../controllers/Users';
//import isAuthenticated from '../middlewares/isAuthenticated';

const userRouter = Router();
const userController = new UserController();
const maxLength = 255;
const minLength = 6;

/*const body = {
  [Segments.BODY]: {
    firstName: Joi.string().min(minLength).max(maxLength).required(),
    lastName: Joi.string().min(minLength).max(maxLength).required(),
    email: Joi.string().email().max(maxLength).required(),
    password: Joi.string().min(minLength).max(maxLength).required(),
    username: Joi.string().min(minLength).max(maxLength).required(),
    telephone: Joi.string().length(13).required(),
    role: Joi.string().default('customer'),
    status: Joi.string().default('active'),
    birthDate: Joi.date().required(),
    notification: Joi.boolean().required(),
    cpf: Joi.string().length(11).required(),
  },
};*/

userRouter.post('/', userController.create);
export default userRouter;
