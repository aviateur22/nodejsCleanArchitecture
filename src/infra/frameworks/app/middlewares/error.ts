import { NextFunction, Request, Response } from "express";
import { ErrorTestException } from "../../../../exceptions/ErrorTestException";
import { ValidationException } from "../../../../exceptions/ValidationException";
import { LoggerServiceImpl } from "../../../services/logger/LoggerServiceImpl";

/**
 * Gestion des erreurs
 */
export default(err: any, req: Request, res: Response, next: NextFunction)=>{
    // Logger 
    const logger = LoggerServiceImpl.getLogger();

    try {
        // Enregistre le message
        logger.logMessage(err.message);

        switch(err.constructor) {
            case ValidationException:
            case ErrorTestException: 
                return res.status(400).json({
                    errorMessage: err.message
                }); 
            break;           
            case Error: 
                return res.status(500).json({
                    errorMessage: 'server error'
                }); 
            break;
            default: 
                return res.status(500).json({
                    errorMessage: 'server error'
                }); 
            break
        }
    } catch (error) {

        // Enregistre le message
        logger.logMessage(err.message);

        /**erreur non managé */
        return res.status(500).json({
            errorMessage: 'server error'
        });        
    }    
};