import request from 'supertest';
import { TodoGenerator } from '../utilities/TodoGenerator';
import { TestUtilities } from '../utilities/TestUtilities';

// Selection Server Express
const testUtilities = new TestUtilities();

// Selection des services pour les tests
testUtilities.selectService();

describe('findAlltodos', ()=>{
   // Jest app
   const app = testUtilities.getBackend();
   
  // Path
  const path: string = '/api/v1/todo/find-all-todos';

  beforeEach(async()=>{
    await testUtilities.resetParam();
  });

  afterEach(async()=>{
    await testUtilities.resetParam();
  });

  it('Should find all the todos avail', async()=>{   
    console.log('test'); 
    const res = await request(app)
    .get(path)

    expect(res.body).toHaveProperty('todos');
    expect(res.body.todos).toBeInstanceOf(Array);
    expect(res.body.todos.length).toBe(2);

  });

  it('Should find no todos', async()=>{
    // Clear tous les todos
    await TodoGenerator.ClearAllTodos();
    
    const res = await request(app)
    .get(path)

    expect(res.body).toHaveProperty('todos');
    expect(res.body.todos.length).toBe(0);
  });

})