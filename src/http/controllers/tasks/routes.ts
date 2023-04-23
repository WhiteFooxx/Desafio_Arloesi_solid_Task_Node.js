import { list } from './List'
import { create } from './create'
import { FastifyInstance } from 'fastify'
import { deleteTask } from './delete'
import { update } from './update'
import { validate } from './validate'

export async function tasksRoutes(app: FastifyInstance) {
  app.post('/tasks', create)

  app.get('/tasks', list)

  app.delete('/tasks/:id', deleteTask)

  app.put('/tasks/:id', update)

  app.patch('/tasks/:TaskId', validate)
}
