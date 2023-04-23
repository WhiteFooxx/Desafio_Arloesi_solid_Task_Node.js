import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { UpdateTaskUseCase } from '../update-task'

export function makeUpdateTaskUseCase() {
  const tasksRepository = new PrismaTasksRepository()
  const useCase = new UpdateTaskUseCase(tasksRepository)

  return useCase
}
