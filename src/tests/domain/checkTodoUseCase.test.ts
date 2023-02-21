import { CheckToggleTodoEntity } from "../../domain/entities/todo/CheckToggleTodoEntity";
import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { TodoGenerator } from "./utilities/TodoGenerator";

describe('UseCase: getAllTodos', () => {
  // Instance GetAllTodoUseCase
  const checkTodoUseCase = UseCaseServiceImpl.getUseCases().CheckToggleTodoUseCase;

  // Reset de la base de données
  beforeEach(async()=>{
    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();

    // Add 2 todos
    await TodoGenerator.CreateTodos();    
  });

  // Check Todo
  it('Should check-complete Todo', async() => {
    try {
      const checkToggleTodo = new CheckToggleTodoEntity('1', true);

      // Check todo
      const todo = await checkTodoUseCase.execute(checkToggleTodo);

      // Récupération todo modifié
      const findTodo = await UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute(checkToggleTodo);

      expect(todo.status).toBeTruthy();
      expect(findTodo.id).toBe(checkToggleTodo.id);
      
    } catch (error) {
      expect(error).toBeFalsy();
    }    
  });

  

});