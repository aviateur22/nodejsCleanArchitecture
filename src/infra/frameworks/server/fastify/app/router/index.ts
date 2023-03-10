import fastify, { FastifyInstance } from "fastify";
import todo from './api/todo';
import routerTest from './api/routerTest'

export default async function routes(fastify: FastifyInstance, options: Object ) {
  // Router todo
  fastify.register(todo);

  // Router test
  fastify.register(routerTest);
}
