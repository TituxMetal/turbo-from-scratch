import process from 'node:process'

import { type MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { Button } from '~/components'

export const meta: MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix App!' }
]

export const loader = () => {
  const env = process.env.NODE_ENV

  return { message: 'Hello World from Remix Vite', env }
}

const Index = () => {
  const data = useLoaderData<typeof loader>()
  // eslint-disable-next-line no-console -- Example of console.log
  console.log(data)

  return (
    <>
      <h1 className='text-5xl font-bold text-orange-500'>Welcome to Remix App</h1>
      <p className='text-pink-400'>Hellooo Remix from NestJS!</p>
      <Button>
        Go to{' '}
        <Link to='about' className='font-bold'>
          About
        </Link>
      </Button>
      <Button>
        Go to{' '}
        <a href='/nest' className='font-bold'>
          Nest Route
        </a>
      </Button>
    </>
  )
}

export default Index
