import cookieParser from 'cookie-parser'
// import helmet from 'helmet'

import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {ValidationPipe, Logger} from '@nestjs/common'
import {ENV} from '@constants'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(cookieParser())
    // app.use(helmet())

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: true
        })
    )

    Logger.log(`Starting server in ${ENV} mode`)
    await app.listen(5000)
}

bootstrap()
