import { Todo } from './todo'
import {TodoSearchForm} from './todoSearchForm'
export type TodoJson = {
  title: string;
  isDone: boolean
  elapsedTime: number;
}

export type TodoListJson = {
  todoList: TodoJson[];
}

export default interface TodoRepositoryInterface {
  search(form: TodoSearchForm): Promise<Todo[]>;
  create(): Promise<Todo[]>;
  update(todoList: Todo[]): Promise<Todo[]>;
}