import { TodoUseCase as TodoUseCaseImpl } from "../src/app/todo/todoUsecase";
import { TodoRepository as TodoRepositoryImpl } from "../src/app/todo";
export { TodoSearchForm } from '../src/app/todo/todoSearchForm';
export { Todo } from "../src/app/todo"

const TodoRepository = new TodoRepositoryImpl()
const TodoUseCase = new TodoUseCaseImpl(TodoRepository)

export default TodoUseCase;