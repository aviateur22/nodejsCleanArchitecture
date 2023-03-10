import { fastify, FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import todos from "../../controllers/todos";
import todoSchemaValidation from '../../middlewares/validations/todo';
import  Ajv from 'ajv'

//import addTodoSchema from "../../../../express/app/middlewares/validations/schemas/addTodoSchema";



export default async function todo(fastify: FastifyInstance, options: Object ) { 
  const ajv = new Ajv({ allErrors: true});
  require("ajv-errors")(ajv );

  // Accueil Todo
  fastify.get('/', async(request: FastifyRequest , reply: FastifyReply)=>{
    reply.send({
      message: 'Bienvenue sur l\'API des Todos'
    })
  });

  // UpdateTodo
  fastify.patch('/:id', todoSchemaValidation.updateTodoSchema, todos.updateTodo);

  // Delete 1 Todo
  fastify.delete('/:id',todoSchemaValidation.idParamSchema, todos.delteOneTodo);

  // Check 1 todo
  fastify.patch('/toggle-check/:id', todoSchemaValidation.updateTodoSchema, todos.checkToggleOneTodo);

  // FindAll todos
  fastify.get('/find-all-todos', todoSchemaValidation.findAllTodosSchema,  todos.findAllTodos);

  // Save 1 Todo
  fastify.post('/', todoSchemaValidation.addTodoSchema, todos.saveOneTodo);

  // // Save Todo
  // fastify.post('/' , { schema: {body: todoSchemaValidation.addTodoSchema}, validatorCompiler: ({schema})=>{
  //    const validate = ajv.compile(schema)
  //     return validate
  // }} ,todos.saveOneTodo);
}
