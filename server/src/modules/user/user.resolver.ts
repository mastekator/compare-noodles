import {Query, Resolver} from '@nestjs/graphql'
import {IUser} from '../../graphql'
import {UserService} from './user.service'
import {User} from './user.entity'

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Query(() => [User])
    async users(): Promise<IUser[]> {
        return this.userService.findAll()
    }
}
