import { TodoModel } from "../../infra/models/TodoModel";
import { TodoEntityMapper } from "../dtos/TodoMapper";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { TodoUseCase } from "./TodoUseCase";

/**
 * Usecase CheckToDoUseCase
 */
class CheckToggleTodoUseCase extends TodoUseCase {

  /**
   * 
   * @param {CheckToggleTodoSchema} todo 
   * @returns {TodoEntity}
   */
  async execute(todo: CheckToggleTodoSchema): Promise<TodoEntity> {

    // Recherche todo
    const findTodo = await this.useCases.findOneTodoUseCase.execute(todo);

    // Mise a jour status
    const checkToggleTodo = await this.repositories.checkToggleItem(todo);

    return TodoEntityMapper.getTodoEntity(new TodoModel(
      findTodo.id,
      findTodo.title,
      findTodo.description,
      todo.status,
      findTodo.createdAt,
      new Date()

    ));
  }

}

export { CheckToggleTodoUseCase }