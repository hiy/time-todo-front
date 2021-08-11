import { TodoUseCase as TodoUseCaseImpl } from "../src/application/usecase/todo/todoUsecase";
import { TodoRepository as TodoRepositoryImpl } from "../src/interface/repository";

const repository = new TodoRepositoryImpl()
const useCase = new TodoUseCaseImpl(repository)

export default useCase;