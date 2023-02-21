import { NextFunction, Request, Response } from "express";
import { ErrorTestException } from "../../../../exceptions/ErrorTestException";
import logger from "../../../services/logger/logger";


export default(err: any, req: Request, res: Response, next: NextFunction)=>{
    try {      
        // Logger
        logger.error(err.message);
        
        if(err instanceof ErrorTestException) {                  
            return res.status(400).json({
                errorMessage: err.message
            });        

        } else if(err instanceof Error) {
            return res.status(500).json({
                errorMessage: 'server error'
            });  

        } else {
            return res.status(500).json({
                errorMessage: 'server error'
            });  
        }
    } catch (error) {
        logger.error(error);
        /**erreur non managé */
        return res.status(500).json({
            errorMessage: 'server error'
        });        
    }    
};