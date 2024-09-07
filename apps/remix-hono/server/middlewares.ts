import { createMiddleware } from 'hono/factory'

/**
 * Cache middleware
 *
 * @param seconds - The number of seconds to cache
 */
export const cache = (seconds: number) => {
  return createMiddleware(async (c, next) => {
    if (!/\.[a-zA-Z0-9]+$/.exec(c.req.path) || c.req.path.endsWith('.data')) {
      return next()
    }

    await next()

    if (!c.res.ok) {
      return
    }

    c.res.headers.set('cache-control', `public, max-age=${String(seconds)}`)
  })
}
