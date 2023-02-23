import { NextFunction, Request, Response } from "express";
import { TodoDAL } from "../../../../../services/dataAccessLayer/todos/TodoDAL";


export default {

  /**
   * Récupération des todos
   * @param { Request } req 
   * @param { Response } res 
   * @param { NextFunction } next 
   */
  findAllTodos: async(req: Request, res: Response, next: NextFunction)=>{
    //
    const todos = await TodoDAL.findAllTodos();

    console.log(todos);
    res.json({
      todos
    })
  }
}