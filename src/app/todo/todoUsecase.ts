import { Todo } from './todo'
import { TodoUseCaseInterface } from "./todoUsecaseInterface"
import { TodoRepository } from ".";
import { TodoSearchForm  } from './todoSearchForm';
export class TodoUseCase implements TodoUseCaseInterface {
  readonly todoRepository: TodoRepository

  constructor(repository: TodoRepository) {
    this.todoRepository = repository;
  }

  async search(form: TodoSearchForm): Promise<Todo[]> {
    return this.todoRepository.search(form)
  }

  async create(): Promise<Todo[]> {
    return this.todoRepository.create()
  }

  async update(todoList: Todo[]): Promise<Todo[]> {
    return this.todoRepository.update(todoList)
  }
}