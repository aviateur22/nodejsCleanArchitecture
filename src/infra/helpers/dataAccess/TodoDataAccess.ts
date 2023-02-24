import { TodoEntity } from '../../../domain/entities/todo/TodoEntity';
import { UseCaseServiceImpl } from '../../../domain/services/UseCaseServiceImpl';
import { AddTodoUseCase } from '../../../domain/useCases/AddToDoUseCase';
import { FindAllToDoUseCase } from '../../../domain/useCases/FindAllToDoUseCase';
import { ValidationException } from '../../../exceptions/ValidationException';

export class TodoDataAccess {

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

  /**
   * Ajout d'une todo
   * @param { string } title 
   * @param { string } description 
   */
  static async addTodo(title: string, description: string) {
    
     // Vérification de la description
     if(typeof description === 'undefined') {      
      description = '';
    }
    
    // Vérification de la description
    if(typeof title === 'undefined') {
      throw new ValidationException('title is mandatory');
    }
    // todo a envoyer
    const todo: AddTodoSchema = {
      title,
      description,
      status: false
    }
    
    // UseCase
    const addTodoUseCase: AddTodoUseCase = UseCaseServiceImpl.getUseCases().addTodoUseCase;   
    const addTodo = await addTodoUseCase.execute(todo);
    return addTodo;
  }
}