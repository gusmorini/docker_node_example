import { fastify } from 'fastify'

const app = fastify()
const port = 3000

app.get('/', () => {
  return 'Hello world'
})

app.get('/fix', () => {
  return 'Hello FIX'
})

app.listen({ port: port, host: '0.0.0.0' })