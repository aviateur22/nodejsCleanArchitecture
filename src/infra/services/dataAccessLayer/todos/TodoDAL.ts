import { TodoEntity } from '../../../../domain/entities/todo/TodoEntity';
import { UseCaseServiceImpl } from '../../../../domain/services/UseCaseServiceImpl';
import { FindAllToDoUseCase } from '../../../../domain/useCases/FindAllToDoUseCase';

export class TodoDAL {

  /**
   * Liste des todos
   * @returns { Array<TodoEntity>}
   */
  static async findAllTodos(): Promise<Array<TodoEntity>> {
    // UseCase
    const findAllTodosUseCase: FindAllToDoUseCase = UseCaseServiceImpl.getUseCases().findAllToDoUseCase;  
    const todos = await findAllTodosUseCase.execute();
    return todos;
  }
}