import { Todo, TodoChartData } from './todo'
import { TodoSearchForm  } from './todoSearchForm';
export interface TodoUseCaseInterface {
  search(form: TodoSearchForm): Promise<Todo[]>;
  searchChartData(form: TodoSearchForm): Promise<TodoChartData[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}