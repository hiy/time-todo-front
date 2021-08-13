import { TodoUseCase as TodoUseCaseImpl } from "../src/app/todo/todoUsecase";
import { TodoRepository as TodoRepositoryImpl } from "../src/app/todo";

const repository = new TodoRepositoryImpl()
const useCase = new TodoUseCaseImpl(repository)

export default useCase;