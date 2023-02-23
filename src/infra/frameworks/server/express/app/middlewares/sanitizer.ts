import { NextFunction, Request, Response } from "express";
import xss from 'xss';
import sanitizer from 'sanitizer'

/**
 * Sanitizer
 */
export default(req: Request, res: Response, next: NextFunction)=>{
  /**nettoyage des données params / body / query */
  let sanitizeDataBody: any = {};
  let sanitizeDataQuery: any = {};
  let sanitizeDataParams: any = {};

  for(let key in req.query){
      let sanitizeString: string|undefined = req.query[key]?.toString();
      sanitizeDataQuery[key] = sanitizeString;        
  }        

  for( let key in req.body){       
      sanitizeDataBody[key] = xss(sanitizer.escape(req.body[key].trim()));
  }        

  for( let key in req.params){       
      sanitizeDataParams[key] = xss(sanitizer.escape(req.params[key].trim()));
  }        

  /** mise à jour des données nettoyés*/
  req.body = sanitizeDataBody;
  req.query = sanitizeDataQuery;
  req.params = sanitizeDataParams;

  next();
 }