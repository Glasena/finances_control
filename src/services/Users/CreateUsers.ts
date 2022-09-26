import UsersRepository from '../../database/repositories/Users/users.repository';
import bcrypt from 'bcrypt';
interface Request {
    name: string;
    username: string;
    email: string;
    password: string;
}

class CreateUsers {

    public async execute({ name, username, email, password }: Request) {

        const hash = await bcrypt.hash(password, 256);

        const transaction = await UsersRepository.create({
            name,
            username,
            email,
            password: hash
        });

        await UsersRepository.save(transaction);

    }

}

export default CreateUsers;