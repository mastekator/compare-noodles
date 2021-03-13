import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {TerminusModule} from '@nestjs/terminus'
import {HealthController} from './health.controller'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TerminusModule
    ],
    controllers: [HealthController]
})
export class HealthModule {
}
