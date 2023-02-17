import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";
import { TodoEntity } from "../entities/items/TodoEntity";

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
    return this.repositories.getAll();
  }
}

export { GetAllTodoUseCase }