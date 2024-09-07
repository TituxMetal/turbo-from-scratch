import process from 'node:process'

export const loader = () => {
  const env = process.env.NODE_ENV

  return { message: 'Hello, world!', env }
}
