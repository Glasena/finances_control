import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import AppError from '../errors/AppError';
import UsersRepository from '../../database/repositories/Users/users.repository'

interface IPayload {
    sub: string;
}


export default async function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization;
    const jwtKey = process.env.JWT_KEY!; 

    if (!authHeader) {
        throw new AppError('Token is required', 401);
    }    

    console.log(authHeader)

    const [, token] = authHeader.split(' ') 

    console.log(token)

    const { sub: user_id } = jwt.verify(token, jwtKey) as IPayload   

    const user = await UsersRepository.findById(user_id);

    if (!user) {
        throw new AppError("User not found", 401);
    }

    req.user = {
        id: user_id
    }

    console.log(user_id)

    next();

    
}