import { Todo } from './todo'

export interface TodoUseCaseInterface {
  search(): Promise<Todo[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}