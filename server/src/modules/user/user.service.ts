import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {IUser} from '../../graphql'
import {User} from './user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<IUser>
    ) {
    }

    findAll(): Promise<IUser[]> {
        return this.usersRepository.find()
    }

    findOne(id: string): Promise<IUser> {
        return this.usersRepository.findOne(id)
    }
}
