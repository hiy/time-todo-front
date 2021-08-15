import { Todo } from './todo'
import { TodoSearchForm  } from './todoSearchForm';
export interface TodoUseCaseInterface {
  search(form: TodoSearchForm): Promise<Todo[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}