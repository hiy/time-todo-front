import { Todo } from '../../../domain/todo'
import { TodoUseCaseInterface } from "../../../interface/usecase/todo/todoUsecaseInterface"
import { TodoRepository } from "../../../interface/repository";

export class TodoUseCase implements TodoUseCaseInterface {
  readonly todoRepository: TodoRepository

  constructor(repository: TodoRepository) {
    this.todoRepository = repository;
    console.log('TodoUseCaseImpl initialized')
  }

  async search(): Promise<Todo[]> {
    return this.todoRepository.search()
  }

  async create(): Promise<Todo[]> {
    return this.todoRepository.create()
  }

  async update(todoList: Todo[]): Promise<Todo[]> {
    return this.todoRepository.update(todoList)
  }
}


// const repository = new TodoRepository()
// const usease = new TodoUseCase(repository)
// usease.search()