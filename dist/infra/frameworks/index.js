"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const http_1 = __importDefault(require("http"));
//import app from './app';
const LoggerServiceImpl_1 = require("../services/logger/LoggerServiceImpl");
const LoggerSource_1 = require("../helpers/logger/LoggerSource");
const RepositoryServiceImpl_1 = require("../services/repository/RepositoryServiceImpl");
const RepositorySources_1 = require("../helpers/repositories/RepositorySources");
const ServerServiceImpl_1 = require("../services/server/ServerServiceImpl");
const ServerSource_1 = require("../helpers/server/ServerSource");
dotenv.config();
// Selection du server
const app = ServerServiceImpl_1.ServerServiceImpl.setServer(ServerSource_1.ServerSource.express);
//Initilaisation du logger
LoggerServiceImpl_1.LoggerServiceImpl.setLogger(LoggerSource_1.LoggerSource.bunyan);
// Initilisation repositories
RepositoryServiceImpl_1.RepositoryServiceImpl.setRepositories(RepositorySources_1.RepositorySources.inMemory);
// Port
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
// Http Server
const server = http_1.default.createServer(app);
// Démarrage server
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
