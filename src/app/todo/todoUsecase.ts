import { Todo, TodoChartData } from './todo'
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

  async searchChartData(form: TodoSearchForm): Promise<TodoChartData[]> {
    const result: Todo[] = await this.search(form);
    const tmp: { [key: string]: number } = {}
    for(const datum of result) {
      if(!tmp[datum.title]) {
        tmp[datum.title] = 0
      }
      tmp[datum.title] += datum.elapsedTime
    }

    return Object.entries(tmp).map((entry) => {
      return new TodoChartData(entry[0], entry[1], '秒')
    })
  }

  async create(): Promise<Todo[]> {
    return this.todoRepository.create()
  }

  async update(todoList: Todo[]): Promise<Todo[]> {
    return this.todoRepository.update(todoList)
  }
}