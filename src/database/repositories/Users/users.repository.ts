import AppDataSource from '../..';
import User from '../../models/Users';

const UsersRepository = AppDataSource.getRepository(User).extend({

    async findById(id: string): Promise < User | null >{

        const user = await this.findOne({ where: { id }})

        if(user) {
            return user;
        }
        else {
            return null;
        }

    },

    async findByUsername(username: string): Promise < User | null >{

        const user = await this.findOne({ where: { username }})

        if(user) {
            return user;
        }
        else {
            return null;
        }

    },

    async findByEmail(email: string): Promise < User | null >{

        const user = await this.findOne({ where: { email }})

        if(user) {
            return user;
        }
        else {
            return null;
        }

    }

});

export default UsersRepository;
