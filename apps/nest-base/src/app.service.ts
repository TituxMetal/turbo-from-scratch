import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello() {
    return { hello: 'Hello World from NestJS!' }
  }
}
