import { TasksRepository } from '@/repositories/tasks-repository'
import { Task } from '@prisma/client'

interface CreateTaskUseCaseRequest {
  description: string
  priority: string
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private TaskRepository: TasksRepository) {}

  async execute({
    description,
    priority,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const task = await this.TaskRepository.create({
      description,
      priority,
    })

    return { task }
  }
}
