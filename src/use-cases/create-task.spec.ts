import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '@/repositories/in-memory/in-memory-task-repository'
import { CreateTaskUseCase } from './create-task'

let tasksRepository: InMemoryTaskRepository
let sut: CreateTaskUseCase

describe('Create Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTaskRepository()
    sut = new CreateTaskUseCase(tasksRepository)
  })

  it('should be able to create task', async () => {
    const { task } = await sut.execute({
      description: 'Task 1',
      priority: 'Alta',
    })

    expect(task.id).toEqual(expect.any(String))
  })
})
