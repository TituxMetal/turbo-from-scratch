import { type LinksFunction } from '@remix-run/node'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from '@remix-run/react'

import faviconAssetUrl from '~/assets/favicon.svg?url'
import { Layout } from '~/components/layout'
import stylesheet from '~/styles/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'icon', href: faviconAssetUrl }
]

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export const ErrorBoundary = () => {
  const error = useRouteError()

  // eslint-disable-next-line no-console -- Show the error in the console
  console.error(error)

  return (
    <html lang='en'>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className='flex min-h-screen flex-col items-center justify-center space-y-4'>
        <p className='text-3xl'>Whoops!</p>
        {isRouteErrorResponse(error) && (
          <p>
            {error.status} - {error.statusText}
          </p>
        )}
        {error instanceof Error && !isRouteErrorResponse(error) && <p>{error.message}</p>}
        {!isRouteErrorResponse(error) && !(error instanceof Error) && <p>Something happened!</p>}
        <Scripts />
      </body>
    </html>
  )
}

export default App
