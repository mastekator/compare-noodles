import {Module} from '@nestjs/common'
import {GraphQLModule} from '@nestjs/graphql'
import {TypeOrmModule} from '@nestjs/typeorm'
import {HealthModule} from './health/health.module'
import {UserModule} from './modules/user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        HealthModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql']
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
