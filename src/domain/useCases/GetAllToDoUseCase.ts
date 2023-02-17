import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";
import { TodoEntityMapper } from "../dtos/TodoMapper";
import { TodoEntity } from "../entities/todo/TodoEntity";

/**
 * Récupération de tous les Todos
 */
class GetAllTodoUseCase {
  private repositories = RepositoryServiceImpl.getRepositories().todoRepository;

  /**
   * Récupération des todos
   * @returns {Array<TodoEntity>}
   */
  async execute(): Promise<Array<TodoEntity>> {

    const todoModels = await this.repositories.getAll();
    return TodoEntityMapper.getTodoEntities(todoModels);
  }
}

export { GetAllTodoUseCase }