import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '@/repositories/in-memory/in-memory-task-repository'
import { DeleteTaskUseCase } from './delete-task'

let tasksRepository: InMemoryTaskRepository
let sut: DeleteTaskUseCase

describe('Delete Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTaskRepository()
    sut = new DeleteTaskUseCase(tasksRepository)
  })

  it('should be able to delete task', async () => {
    const createdTask = await tasksRepository.create({
      description: 'task 1',
      priority: 'Alta',
    })

    expect(tasksRepository.items.length).toBe(1)

    await sut.execute({
      id: createdTask.id,
    })

    expect(tasksRepository.items.length).toBe(0)
  })
})
