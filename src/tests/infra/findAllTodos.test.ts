import request from 'supertest';
import { SelectServices } from '../domain/utilities/SelectServices';
import { ServerServiceImpl } from '../../infra/services/server/ServerServiceImpl';
import { ServerSource } from '../../infra/helpers/server/ServerSource';

describe('findAlltodos', ()=>{

  beforeAll(async()=>{
  // Selection logger
  SelectServices.selectLoggerSource();

  // Repositories
  SelectServices.SelectRepositoriesSource();

    // const server = new Server('5000');
    // await server.startServer();
  });

  it('Should find all the todos avail', async()=>{

    // Selection Server Express
    const app = ServerServiceImpl.setServer(ServerSource.express);

    const res = await request(app)
    .get('/api/v1/todo/find-all-todos')

    expect(res.body).toHaveProperty('todos');

  });

})