import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '@/repositories/in-memory/in-memory-task-repository'
import { UpdateTaskUseCase } from './update-task'

let tasksRepository: InMemoryTaskRepository
let sut: UpdateTaskUseCase

describe('Update Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTaskRepository()
    sut = new UpdateTaskUseCase(tasksRepository)
  })

  it('should be able to update task', async () => {
    const task = await tasksRepository.create({
      description: 'task 1',
      priority: 'Alta',
    })

    const response = await sut.execute({
      TaskId: task.id,
      description: 'task 2',
      priority: 'Medio',
    })

    expect(response.task.description).toEqual('task 2')
  })
})
