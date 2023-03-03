import express from "express";
import api from './api';
import routerTest from "./api/routerTest";

const router = express.Router();

// Api Todo
router.use('/api/v1', api);

// Router Test unitaire
router.use(routerTest);

export default router