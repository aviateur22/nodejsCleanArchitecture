import request from 'supertest';
import { UseCaseServiceImpl } from "../../domain/services/UseCaseServiceImpl";
import { TestUtilities } from '../utilities/TestUtilities';

// Selection Server Express
const testUtilities = new TestUtilities();

// Selection des services pour les tests
testUtilities.selectService();

// Suppression d'une Todo
describe('ToggleCheck Todo', ()=>{

 // Jest app
 const app = testUtilities.getBackend();

  // Path
  let path = '/api/v1/todo/toggle-check/1';

  beforeEach(async()=>{
    await testUtilities.resetParam();
  });
  
  afterEach(async()=>{
    await testUtilities.resetParam();
  });

  // Succes check Todo
  it('Should check one Todo', async()=>{
    const res = await request(app)
    .patch(path)
    .send({
      status: true
    });
    
    // Récupération des Todos
    const findTodo = await UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute({
      id: "1"
    });

    expect(res.body).toHaveProperty('todo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo.id.toString()).toBe('1');
    expect(res.body.todo.status).toBeTruthy();
    expect(findTodo.status).toBeTruthy();
  });

  // Success unCheck Todo
  it('Should unCheck one Todo', async()=>{
    const res = await request(app)
    .patch(path)
    .send({
      status: false
    });
       
    // Récupération des Todos
    const findTodo = await UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute({
      id: "1"
    });
    expect(res.body).toHaveProperty('todo');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo.id.toString()).toBe('1');
    expect(res.body.todo.status).toBeFalsy();
    expect(findTodo.status).toBeFalsy();   
  });

  // Recherhche Todo qui n'existe pas
  it('Should throw TodoNotfindException because Todo does not exist', async()=>{
    // Path
    path = '/api/v1/todo/5'
    const res = await request(app)
    .get(path)

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('todo not find');
    expect(res.body.todo).toBeFalsy();
  });
});