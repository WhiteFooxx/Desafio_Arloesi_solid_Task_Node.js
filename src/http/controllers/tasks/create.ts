import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateTaskUseCase } from '@/use-cases/factories/make-create-task-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    description: z.string(),
    priority: z.enum(['alto', 'médio', 'baixo']),
  })

  const { description, priority } = createGymBodySchema.parse(request.body)

  const createTaskUseCase = makeCreateTaskUseCase()

  await createTaskUseCase.execute({
    description,
    priority,
  })

  return reply.status(201).send()
}
