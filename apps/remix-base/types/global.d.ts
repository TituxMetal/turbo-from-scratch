import { type RemixService } from '@repo/nest-base'

declare module '@remix-run/node' {
  interface AppLoadContext {
    remixService: RemixService
  }
}
