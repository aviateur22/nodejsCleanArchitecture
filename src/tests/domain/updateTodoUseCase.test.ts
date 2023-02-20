import { UpdateTodoEntity } from "../../domain/entities/todo/UpdateTodoEntity";
import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { TodoGenerator } from "./utilities/TodoGenerator";

describe('Update todo UseCade', ()=>{
  // Instance UpdateTodo
  const updateTodoUseCase = UseCaseServiceImpl.getUseCases().updateTodoUseCase;

  // Reset des repositories
  beforeEach(async()=>{
    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();

    // Ajout de todos
    await TodoGenerator.CreateTodos();
  });

  // Mise a jour d'une todo
  it('Should update a todo', async()=>{
    try {
      // Mise a jour des données
      const updateTodo: UpdateTodoSchema = new UpdateTodoEntity(
        '1', 
        'mon nouveau titre', 
        'ma nouvelle description',
        false

      );

      // Mise à jour de la todo
      const todo = await updateTodoUseCase.execute(updateTodo);
      expect(todo.id).toBe(updateTodo.id);
      expect(todo.statut).toBe(updateTodo.status);
      expect(todo.title).toBe(updateTodo.title);
      expect(todo.description).toBe(updateTodo.description);
      
    } catch (error) {      
      expect(error).toBeFalsy();
    }
    
  });
});