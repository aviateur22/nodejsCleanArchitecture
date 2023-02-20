import { TodoEntityMapper } from "../dtos/TodoMapper";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { TodoUseCase } from "./TodoUseCase";

/**
 * Récupération de tous les Todos
 */
class GetAllTodoUseCase extends TodoUseCase {
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