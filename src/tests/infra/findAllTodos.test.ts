import request from 'supertest';
import app from '../../infra/frameworks/app';
import { Server } from '../../infra/frameworks/server';
import { SelectServices } from '../domain/utilities/SelectServices';

describe('findAlltodos', ()=>{

  beforeAll(async()=>{
  // Selection logger
  SelectServices.selectLoggerSource();

  // Repositories
  SelectServices.SelectRepositoriesSource();

    const server = new Server('5000');
    await server.startServer();
  });

  it('Should find all the todos avail', async()=>{
    const res = await request(app)
    .get('/api/v1/todo/find-all-todos')

    expect(res.body).toHaveProperty('todos');

  });

})