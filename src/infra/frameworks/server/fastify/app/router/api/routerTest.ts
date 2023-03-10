import { FastifyInstance } from "fastify";

export default async function routerTest(fastify: FastifyInstance, options: Object ) {
  fastify.get('/router-test', async (request, reply)=>{
    reply.send({
      message: 'Test du router'
    });
  });

  fastify.post('/router-test', async (request, reply)=>{
    reply.send({
      message: 'test du routeur'
    });
  })
}
