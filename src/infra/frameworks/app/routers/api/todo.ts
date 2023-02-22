import express, { Request, Response } from "express";
import todos from "../../controllers/todo";
import controllerHandler from "../../helpers/controllerHandler";
const router = express.Router();

/**
 * Accueil fonctionnement API
 */
router.get('/', (req: Request, res: Response)=>{
  res.json({
    message: 'Bienvenue sur l\'API des Todos'
  })
})

router.get('/find-all-todos',
  controllerHandler(todos.findAllTodos)

)

export default router;