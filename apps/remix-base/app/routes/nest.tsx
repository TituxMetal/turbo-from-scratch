import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const message = await context.remixService.getHello()

  return json(message)
}

const NestRoute = () => {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div className='bg-blue-900 p-4 font-sans'>
      <h1 className='my-4 text-3xl text-green-500'>Message from backend: {message}</h1>
      <p className='text-2xl'>
        Edit this file in <code>app/routes/api.tsx</code>
      </p>
      <button type='button' className='m-4 rounded-md border border-sky-200 p-4 text-xl'>
        <Link to='/'>Home</Link>
      </button>
      <button type='button' className='m-4 rounded-md border border-sky-200 p-4 text-xl'>
        <Link to='/about'>About</Link>
      </button>
    </div>
  )
}

export default NestRoute
