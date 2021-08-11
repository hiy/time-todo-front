import { Todo } from '../../../domain/todo'

export interface TodoUseCaseInterface {
  search(): Promise<Todo[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}