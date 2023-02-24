import express, { Request, Response } from "express";
import todos from "../../controllers/todo";
import controllerHandler from "../../helpers/controllerHandler";
import validation from '../../middlewares/validations';
import validationTodoSchema from '../../middlewares/validations/schemas'

const router = express.Router();


 // Accueil fonctionnement API 
router.get('/', (req: Request, res: Response)=>{
  res.json({
    message: 'Bienvenue sur l\'API des Todos'
  })
})

// Ajout de 1 Todo
router.post('/',
  controllerHandler(validation(validationTodoSchema.addTodoSchema)),
  controllerHandler(todos.addTodo));

// Update d'une Todo
router.patch('/',
controllerHandler(validation(validationTodoSchema.updateTodoSchema)),
controllerHandler(todos.updateTodo))

// Récupération de tous les todos
router.get('/find-all-todos',
  controllerHandler(todos.findAllTodos)
)

export default router;