import { Request, Response } from 'express';
import Login from '../services/Login/Login';

class LoginController {

    public async login(req: Request, res: Response){

        const { login,
                password } = req.body;

        const session = new Login();
        
        const token = await session.execute({ login, password });

        return res.status(200).json(token);

    }

}

export default LoginController;