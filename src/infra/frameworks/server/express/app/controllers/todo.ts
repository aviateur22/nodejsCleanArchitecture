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
    // Récupération des todos
    const todos = await TodoDataAccess.findAllTodos();

    res.json({
      todos
    })
  },

  /**
   * Ajout d'une Todo
   * @param req 
   * @param res 
   * @param next 
   */
  addTodo: async(req: Request, res: Response, next: NextFunction) => {

    let { title, description } = req.body;

    // Ajout de la todo
    const todo = await TodoDataAccess.addTodo(title, description);    
    res.status(201).json({
      todo
    })
  }
}