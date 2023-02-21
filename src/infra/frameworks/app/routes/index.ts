import express from "express";
import apiRouter from './api';
// import error from '../controllers/error';
// import notFound from '../controllers/notFound';

const router = express.Router();

/** router api */
router.use('/api/v1', apiRouter);

// /**path invalide */
// router.use(notFound);

// /** error */
// router.use(error);

export default router