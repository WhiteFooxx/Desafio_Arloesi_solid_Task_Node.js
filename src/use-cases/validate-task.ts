import { Task } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { TasksRepository } from '@/repositories/tasks-repository'

interface ValidateTaskUseCaseRequest {
  TaskId: string
}

interface ValidateTaskUseCaseResponse {
  task: Task
}

export class ValidateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    TaskId,
  }: ValidateTaskUseCaseRequest): Promise<ValidateTaskUseCaseResponse> {
    const task = await this.tasksRepository.findById(TaskId)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    task.validated_at = new Date()

    await this.tasksRepository.save(task)

    return { task }
  }
}
