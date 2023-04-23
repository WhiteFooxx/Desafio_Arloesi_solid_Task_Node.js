import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { FetchAllTasksUseCase } from '../fetch-all-tasks'

export function makeFetchAllTasksUseCase() {
  const tasksRepository = new PrismaTasksRepository()
  const useCase = new FetchAllTasksUseCase(tasksRepository)

  return useCase
}
