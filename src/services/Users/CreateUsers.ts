import UsersRepository from '../../database/repositories/Users/users.repository';

interface Request {
    name: string;
    username: string;
    email: string;
    password: string;
}

class CreateUsers {

    public async execute({ name, username, email, password }: Request) {

        const transaction = await UsersRepository.create({
            name,
            username,
            email,
            password
        });

        await UsersRepository.save(transaction);

    }

}

export default CreateUsers;