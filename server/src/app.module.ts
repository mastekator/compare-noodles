import {Module} from '@nestjs/common'
import {GraphQLModule} from '@nestjs/graphql'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UserModule} from './modules/user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql']
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
