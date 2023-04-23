import { Task, Prisma } from '@prisma/client'
import { TasksRepository } from '../tasks-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTasksRepository implements TasksRepository {
  async findById(id: string) {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    return task
  }

  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({
      data,
    })

    return task
  }

  async findAll() {
    const tasks = await prisma.task.findMany()

    return tasks
  }

  async save(data: Task) {
    const task = await prisma.task.update({
      where: {
        id: data.id,
      },
      data,
    })

    return task
  }

  async delete(data: Task) {
    const task = await prisma.task.delete({
      where: {
        id: data.id,
      },
    })

    return task
  }
}
