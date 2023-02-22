import * as dotenv from "dotenv";
import http from 'http';
import app from './app';
import { LoggerServiceImpl } from '../services/logger/LoggerServiceImpl';
import { LoggerSource } from '../helpers/logger/LoggerSource';
import { RepositoryServiceImpl } from "../services/repository/RepositoryServiceImpl";
import { RepositorySources } from "../helpers/repositories/RepositorySources";
dotenv.config();

//Initilaisation du logger
LoggerServiceImpl.setLogger(LoggerSource.bunyan);

// Initilisation repositories
RepositoryServiceImpl.setRepositories(RepositorySources.inMemory);

// Port
const PORT = process.env.PORT ?? 3000;

// Http Server
const server = http.createServer(app);

// Démarrage server
server.listen(PORT, () => {  
    console.log(`http://localhost:${PORT}`);
});