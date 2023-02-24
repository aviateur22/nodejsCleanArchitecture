import request from "supertest";
import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { ServerSource } from "../../infra/helpers/server/ServerSource";
import { ServerServiceImpl } from "../../infra/services/server/ServerServiceImpl";
import { SelectServices } from "../domain/utilities/SelectServices";
import { TodoGenerator } from "../domain/utilities/TodoGenerator";
describe('UpdateTodo', ()=>{

  // Server
  const app = ServerServiceImpl.setServer(ServerSource.express);

  const path = '/api/v1/todo'

  beforeEach(async()=>{
    // Selection logger
    SelectServices.selectLoggerSource();

    // Repositories
    SelectServices.SelectRepositoriesSource();

    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();

    // Add 2 todos
    await TodoGenerator.CreateTodos();
  })
 
  // Update Todo
  it('should update a Todo', async()=>{
    const res = await request(app)
    .patch(path)    
    .send({
      id: '2',
      title: 'mon titre mis a jour',
      description: 'ma description mis a jour',
      status: true
    })

    // Récupération des Todos
    const todos = await UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
    
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo.id).toBe('2')
    expect(res.body.todo.title).toBe('mon titre mis a jour');
    expect(res.body.todo.description).toBe('ma description mis a jour');

    // Todos
    expect(todos.length).toBe(2);
    expect(todos[1].title).toBe('mon titre mis a jour');
  });

  it('Should update a Todo with an empty description', async()=>{
    const res = await request(app)
    .patch(path)    
    .send({
      id: '2',
      title: 'mon titre mis a jour',
      description: '',
      status: true
    })

    // Récupération des Todos
    const todos = await UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
    
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo.id).toBe('2')
    expect(res.body.todo.title).toBe('mon titre mis a jour');
    expect(res.body.todo.description).toBe('');

    // Todos
    expect(todos.length).toBe(2);
    expect(todos[1].title).toBe('mon titre mis a jour');

  });

  // Todo absente d ela base de données
  it('Should throw TodoNotfindException because Todo does not exist', async()=>{
    const res = await request(app)
    .patch(path)    
    .send({
      id: '3',
      title: 'mon titre mis a jour',
      description: 'ma description mis a jour',
      status: true
    });

    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('todo not find');
  });

  // Todo - titre manuqant
  it('Should throw ValidationException because Title is missing', async()=>{
    const res = await request(app)
    .patch(path)    
    .send({
      id: '2',
      title: '',
      description: 'ma nouvelle description',
      status: true
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('title is mandatory');
  });

  // Todo - status manquant
  it('Should throw ValidationException because status is missing', async()=>{
    const res = await request(app)
    .patch(path)    
    .send({
      id: '2',
      title: 'mon noveau titre',
      description: 'ma nouvelle description',      
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('status is mandatory');

  });
})