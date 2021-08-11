import { Todo } from '../../../domain/todo'

export type TodoJson = {
  title: string;
  isDone: boolean
  elapsedTime: number;
}

export type TodoListJson = {
  todoList: TodoJson[];
}

export default interface TodoRepositoryInterface {
  search(): Promise<Todo[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}