import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeValidateTaskUseCase } from '@/use-cases/factories/make-validate-task-use-case'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateTaskParamsSchema = z.object({
    TaskId: z.string().uuid(),
  })

  const { TaskId } = validateTaskParamsSchema.parse(request.params)

  const validateTaskUseCase = makeValidateTaskUseCase()

  await validateTaskUseCase.execute({
    TaskId,
  })

  return reply.status(204).send()
}
