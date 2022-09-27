import { Request, Response } from 'express';
import Login from '../services/Login/Login';

class LoginController {

    public async login(req: Request, res: Response){

        const { username,
                email,
                password } = req.body;

        const session = new Login();
        
        await session.execute({ username, email, password});

        return res.status(200).json();

    }

}

export default LoginController;