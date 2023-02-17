import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { TodoGenerator } from "./utilities/TodoGenerator";

describe('UseCase: getAllTodos', () => {

  // Reset de la base de données
  beforeEach(async()=>{
    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();

    // Add 2 todos
    await TodoGenerator.CreateTodos();    
  });

  it('Should get all todos', async() => {
    const getAllToDoUseCase = UseCaseServiceImpl.getUseCases().getAllTodoUseCase;
    const todos = await getAllToDoUseCase.execute();

    expect(todos.length).toBe(2);

  });

});