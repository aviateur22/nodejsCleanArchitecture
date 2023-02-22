import express, { Request, Response } from "express";
const router = express.Router();

/**
 * Test fonctionnement API
 */
router.get('/', (req: Request, res: Response)=>{
  res.json({
    message: 'Bienvenue sur l\'API des Todos'
  })
})
export default router;