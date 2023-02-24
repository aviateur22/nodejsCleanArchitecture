import express, { Request, Response } from "express";
import todos from "../../controllers/todo";
import controllerHandler from "../../helpers/controllerHandler";
import validation from '../../middlewares/validations';
import addTodoSchema from '../../middlewares/validations/schemas/addTodoSchema'

const router = express.Router();


 // Accueil fonctionnement API 
router.get('/', (req: Request, res: Response)=>{
  res.json({
    message: 'Bienvenue sur l\'API des Todos'
  })
})

// Ajout de 1 todo
router.post('/',
  controllerHandler(validation(addTodoSchema)),
  controllerHandler(todos.addTodo));

// Récupération de tous les todos
router.get('/find-all-todos',
  controllerHandler(todos.findAllTodos)
)

export default router;