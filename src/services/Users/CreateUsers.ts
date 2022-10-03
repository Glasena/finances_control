import UsersRepository from '../../database/repositories/Users/users.repository';
import bcrypt from 'bcrypt';
import AppError from '../../api/errors/AppError';
interface Request {
  name: string;
  username: string;
  email: string;
  password: string;
}

class CreateUsers {
  public async execute({ name, username, email, password }: Request) {
    let user = await UsersRepository.findByUsername(username);

    if (user) {
      throw new AppError('User Already Exists !', 400);
    }

    user = await UsersRepository.findByEmail(email);

    if (user) {
      throw new AppError('User Already Exists !', 400);
    }

    const hash = await bcrypt.hash(password, 256);

    const transaction = await UsersRepository.create({
      name,
      username,
      email,
      password: hash,
    });

    await UsersRepository.save(transaction);
  }
}

export default CreateUsers;
