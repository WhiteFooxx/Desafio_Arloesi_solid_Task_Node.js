import { Task } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { TasksRepository } from '@/repositories/tasks-repository'

interface UpdateTaskUseCaseRequest {
  TaskId: string
  description: string
  priority: string
}

interface UpdateTaskUseCaseResponse {
  task: Task
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({
    TaskId,
    description,
    priority,
  }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.tasksRepository.findById(TaskId)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    const updateTask = await this.tasksRepository.save({
      ...task,
      description,
      priority,
    })

    return { task: updateTask }
  }
}
