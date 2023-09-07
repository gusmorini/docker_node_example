import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const app = fastify()
const port = 3000
const database = new DatabaseMemory()

app.get('/videos', (request) => {
  const { search } = request.query
  const videos = database.list(search)
  return videos
})

app.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body
  database.create({ title, description, duration })
  return reply.status(201).send()
})

app.put('/videos/:id', (request, reply) => {
  const { id } = request.params
  const { title, description, duration } = request.body

  database.update(id, {
    title,
    description,
    duration
  })

  return reply.status(204).send()

})

app.delete('/videos/:id', (request, reply) => {
  const { id } = request.params
  database.delete(id)
  return reply.status(204).send()
})

app.listen({ port: port, host: '0.0.0.0' })