import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeDeleteTaskUseCase } from '@/use-cases/factories/make-delete-task-use-case'

export async function deleteTask(request: FastifyRequest, reply: FastifyReply) {
  const deleteParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteParamsSchema.parse(request.params)

  const deleteUseCase = makeDeleteTaskUseCase()

  const task = await deleteUseCase.execute({
    id,
  })

  return reply.status(200).send(task)
}
