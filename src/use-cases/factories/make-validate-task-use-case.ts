import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { ValidateTaskUseCase } from '../validate-task'

export function makeValidateTaskUseCase() {
  const tasksRepository = new PrismaTasksRepository()
  const useCase = new ValidateTaskUseCase(tasksRepository)

  return useCase
}
