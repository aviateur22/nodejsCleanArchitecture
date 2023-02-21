import express from "express";
import api from './api';
import error from '../controllers/error';
import notFound from '../controllers/notfound';
import routerTest from "./api/routerTest";

const router = express.Router();

// Api Todo
router.use('/api/v1', api);

// Router Test unitaire
router.use(routerTest);

// Route 404
router.use(notFound);

// Route 500
router.use(error);


export default router