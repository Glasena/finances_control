import AppError from 'src/api/errors/AppError';
import UsersRepository from '../../database/repositories/Users/users.repository';

interface LoginData {
    username?: string,
    email?: string,
    password: string
}

class Login {

    public async execute({username, email, password} : LoginData){

        if(username){
            let user = await UsersRepository.findByUsername(username);
        }
        
        if((email) && !(username)){
            let user = await UsersRepository.findByEmail(email);
        }

        /*if (!(user)){
            throw new AppError('User Not Found !', 400);
        }*/

    }

}

export default Login;