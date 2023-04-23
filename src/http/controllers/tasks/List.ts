import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFetchAllTasksUseCase } from '@/use-cases/factories/make-fetch-all-tasks-use-case'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const fetchAllTasksUseCase = makeFetchAllTasksUseCase()

  const tasks = await fetchAllTasksUseCase.execute()

  return reply.status(201).send(tasks)
}
