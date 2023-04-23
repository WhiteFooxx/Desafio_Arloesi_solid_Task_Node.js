import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeUpdateTaskUseCase } from '@/use-cases/factories/make-update-task-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const updateBodySchema = z.object({
    description: z.string(),
    priority: z.enum(['alto', 'médio', 'baixo']),
  })

  const { id } = updateParamsSchema.parse(request.params)

  const { description, priority } = updateBodySchema.parse(request.body)

  const updateTaskUseCase = makeUpdateTaskUseCase()

  const task = await updateTaskUseCase.execute({
    TaskId: id,
    description,
    priority,
  })

  return reply.status(200).send(task)
}
