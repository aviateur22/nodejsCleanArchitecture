import { NextFunction, Request, Response } from "express";
import { TodoDataAccess } from "../../../../../helpers/dataAccess/TodoDataAccess";


export default {

  /**
   * Récupération des todos
   * @param { Request } req 
   * @param { Response } res 
   * @param { NextFunction } next 
   */
  findAllTodos: async(req: Request, res: Response, next: NextFunction)=>{
    // Récupération des Todos
    const todos = await TodoDataAccess.findAllTodos();

    res.json({
      todos
    })
  },

  /**
   * Ajout d'une Todo
   * @param { Request } req 
   * @param { Response } res 
   * @param { NextFunction } next
   */
  addTodo: async(req: Request, res: Response, next: NextFunction) => {

    let { title, description } = req.body;

    // Ajout de la Todo
    const todo = await TodoDataAccess.addTodo(title, description);    
    res.status(201).json({
      todo
    })
  },

  /**
   * Update d'une Todo
   * @param { Request } req 
   * @param { Response } res 
   * @param { NextFunction } next 
   */
  updateTodo: async(req: Request, res: Response, next: NextFunction)=>{
    
    const { id, title, description, status } = req.body;

    // Mise a jour de la Todo
    const todo = await TodoDataAccess.updateTodo(id, title, description, status);

    res.status(200).json({
      todo
    })
  }
}