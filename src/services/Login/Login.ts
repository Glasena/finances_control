import AppError from '../../api/errors/AppError';
import UsersRepository from '../../database/repositories/Users/users.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

interface LoginData {
    login: string,
    password: string
}

class Login {

    public async execute({login, password} : LoginData){
        
        let user;

        user = await UsersRepository.findByUsername(login);
        
        if(!(user)){
            user = await UsersRepository.findByEmail(login);
        }

        if (!(user)){
            throw new AppError('User Not Found !', 400);
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!(correctPassword)){
            throw new AppError('Incorrect Password !', 400);
        }

        const jwtKey = process.env.JWT_KEY;

        const token = jwt.sign({}, jwtKey, {
            subject: user.id,
            expiresIn: '1d',
        });

        return { token }

    }

}

export default Login;