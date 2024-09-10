import { NestFactory } from '@nestjs/core'
import { type NestExpressApplication } from '@nestjs/platform-express'
import { getPublicDir, startDevServer } from '@repo/remix-app'

import { AppModule } from '~/app.module'

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false
  })

  await startDevServer(app)

  console.log(getPublicDir())

  app.useStaticAssets(getPublicDir(), {
    immutable: true,
    maxAge: '1y',
    index: false
  })

  const selectedPort = process.env.PORT ?? 3000

  console.log(`Running on port http://localhost:${selectedPort.toString()}`)
  await app.listen(selectedPort)
}

bootstrap()
