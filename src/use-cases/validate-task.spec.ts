import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '@/repositories/in-memory/in-memory-task-repository'
import { ValidateTaskUseCase } from './validate-task'

let tasksRepository: InMemoryTaskRepository
let sut: ValidateTaskUseCase

describe('Validate Check in Use Case', () => {
  beforeEach(async () => {
    tasksRepository = new InMemoryTaskRepository()
    sut = new ValidateTaskUseCase(tasksRepository)
  })

  it('should be able to validate the task', async () => {
    const createdTask = await tasksRepository.create({
      description: 'task 1',
      priority: 'Alta',
    })

    const { task } = await sut.execute({
      TaskId: createdTask.id,
    })

    expect(task.validated_at).toEqual(expect.any(Date))
    expect(tasksRepository.items[0].validated_at).toEqual(expect.any(Date))
  })
})
