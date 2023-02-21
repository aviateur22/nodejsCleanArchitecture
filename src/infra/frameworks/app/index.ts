import express from "express";
import router from './routers';
const app = express();

// Routes de l'application Todo
app.use(router);

export default app;