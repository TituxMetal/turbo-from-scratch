import { Link } from '@remix-run/react'

import { Button } from '~/components'

const AboutRoute = () => {
  return (
    <>
      <h1 className='text-5xl font-bold text-blue-500'>About Page</h1>
      <p className='text-2xl text-red-400'>This is the about page</p>
      <Button>
        Go to{' '}
        <Link to='/' className='font-bold'>
          Index Page
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

export default AboutRoute
