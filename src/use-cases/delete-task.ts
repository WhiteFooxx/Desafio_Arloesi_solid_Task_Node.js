import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteTaskUseCaseRequest {
  id: string
}

interface DeleteTaskUseCaseResponse {
  task: Task
}

export class DeleteTaskUseCase {
  constructor(private TaskRepository: TasksRepository) {}

  async execute({
    id,
  }: DeleteTaskUseCaseRequest): Promise<DeleteTaskUseCaseResponse> {
    const task = await this.TaskRepository.findById(id)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    const deletedTask = await this.TaskRepository.delete(task)

    return { task: deletedTask }
  }
}
