import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { TodoGenerator } from "./utilities/TodoGenerator";


describe('UseCase: addItem', ()=>{

  // Instance GetAllTodoUseCase
  const addTodoUseCase = UseCaseServiceImpl.getUseCases().addTodoUseCase;

  beforeEach(async()=>{
    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();

    // Add 2 todos
    await TodoGenerator.CreateTodos();   
  });

  it('Should add one todo', async()=>{

    const addTodo = await addTodoUseCase.execute({
      title: 'Mon Titre',
      description: 'Ma descriptiuon'
    });


    const todos = await UseCaseServiceImpl.getUseCases().getAllTodoUseCase.execute();

    expect(todos.length).toBe(3);
  });
});