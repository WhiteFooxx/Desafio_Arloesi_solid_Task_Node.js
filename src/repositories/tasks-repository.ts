import { Prisma, Task } from '@prisma/client'

export interface TasksRepository {
  findById(id: string): Promise<Task | null>
  create(data: Prisma.TaskCreateInput): Promise<Task>
  findAll(): Promise<Task[]>
  save(task: Task): Promise<Task>
  delete(task: Task): Promise<Task>
}
