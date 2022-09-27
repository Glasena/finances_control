import CreateUsers from '../services/Users/CreateUsers'
import { Request, Response } from 'express';
class UsersController {

    public async create(req: Request, res: Response): Promise<Response> {

        const { name,
                username,
                email,
                password } = req.body;
 
        const createUsers = new CreateUsers();
        
        await createUsers.execute({ name,
            username,
            email,
            password });

        return res.status(201).json();

    }
}

export default UsersController;