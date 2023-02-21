import express, { NextFunction, Request, Response } from "express";
import { ErrorTestException } from "../../../../../exceptions/ErrorTestException";
import controllerHandler from "../../helpers/controllerHandler";
const router = express.Router();

  /**
   * Erreur
   */
  router.get('/test-error', 
    controllerHandler((
      req: Request, res: Response, next: NextFunction)=>{
        throw new Error('Error Test')
      }
    ));


  /**
   * Erreur mmanagé
   */
  router.get('/test-error-managed', 
  controllerHandler((req: Request, res: Response, next:  NextFunction)=>{
    throw new ErrorTestException('managed error')
  }));
export default router;