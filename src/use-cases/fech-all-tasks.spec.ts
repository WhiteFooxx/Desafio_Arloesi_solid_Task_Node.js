import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '@/repositories/in-memory/in-memory-task-repository'
import { FetchAllTasksUseCase } from './fetch-all-tasks'

let tasksRepository: InMemoryTaskRepository
let sut: FetchAllTasksUseCase

describe('Fetch Task Use Case', () => {
  beforeEach(() => {
    tasksRepository = new InMemoryTaskRepository()
    sut = new FetchAllTasksUseCase(tasksRepository)
  })

  it('should be able to fetch tasks', async () => {
    await tasksRepository.create({
      description: 'task 1',
      priority: 'Alta',
    })

    await tasksRepository.create({
      description: 'task 2',
      priority: 'Media',
    })

    const response = await sut.execute()

    expect(response.tasks).toHaveLength(2)
  })
})
