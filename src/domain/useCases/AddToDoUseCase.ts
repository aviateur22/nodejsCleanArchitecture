import { RepositoryServiceImpl } from "../../infra/services/repository/RepositoryServiceImpl";
import { TodoEntityMapper } from "../dtos/TodoMapper";
import { TodoEntity } from "../entities/todo/TodoEntity";

/**
 * Ajout d'un nouveau ToDo
 */
class AddTodoUseCase {
  private repositories = RepositoryServiceImpl.getRepositories().todoRepository;


  /**
   * Ajout d'un todo
   * @param todo 
   * @returns 
   */
  async execute(todo: AddTodoSchema): Promise<TodoEntity> {
    const addTodo = await this.repositories.save(todo);
    return TodoEntityMapper.getTodoEntity(addTodo);

  }
}

export { AddTodoUseCase }