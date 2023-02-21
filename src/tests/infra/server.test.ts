import request from 'supertest';
import { ErrorTestException } from '../../exceptions/ErrorTestException';
import app from '../../infra/frameworks/app';
import { Server } from '../../infra/frameworks/server';

describe('StartServer', ()=>{

  // Start Server et vérification
  it('Should Start a server and get message "Bienvenue sur l\'API des Todos"', async()=>{
    const server = new Server('3000');
    await server.startServer();

    const res = await request(app)
      .get('/api/v1/todo');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Bienvenue sur l\'API des Todos');
  });

  // Path invalide
  it('Path Should throw error 404 because path is unvalid', async()=>{
    const res = await request(app)
      .get('/api/v1/unvalid-path');

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('invalid path');
  });

  // Path avec controller en erreur
  it('Path Should throw error 500', async()=>{
    const res = await request(app)
      .get('/test-error');

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('server error');
  });

  // Path avec Erreur managé
  it('Path Should throw error 400', async()=>{
    const res = await request(app)
    .get('/test-error-managed');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errorMessage');
    expect(res.body.errorMessage).toBe('managed error');
  });
});