import { Task, Prisma } from '@prisma/client'
import { TasksRepository } from '../tasks-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryTaskRepository implements TasksRepository {
  public items: Task[] = []

  async findById(id: string) {
    const task = this.items.find((item) => item.id === id)

    if (!task) {
      return null
    }

    return task
  }

  async create(data: Prisma.TaskCreateInput) {
    const task = {
      id: randomUUID(),
      description: data.description,
      priority: data.priority,
      created_at: new Date(),
      validated_at: null,
    }

    this.items.push(task)

    return task
  }

  async findAll(): Promise<Task[]> {
    return this.items
  }

  async save(task: Task): Promise<Task> {
    const taskIndex = this.items.findIndex((item) => item.id === task.id)

    if (taskIndex >= 0) {
      this.items[taskIndex] = task
    }

    return task
  }

  async delete(task: Task): Promise<Task> {
    this.items = this.items.filter((item) => item.id !== task.id)

    return task
  }
}
