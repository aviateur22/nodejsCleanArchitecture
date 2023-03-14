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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const http_1 = __importDefault(require("http"));
const LoggerServiceImpl_1 = require("../services/logger/LoggerServiceImpl");
const LoggerSource_1 = require("../helpers/logger/LoggerSource");
const RepositoryServiceImpl_1 = require("../services/repository/RepositoryServiceImpl");
const RepositorySources_1 = require("../helpers/repositories/RepositorySources");
const ServerServiceImpl_1 = require("../services/server/ServerServiceImpl");
const ServerSource_1 = require("../helpers/server/ServerSource");
const ServerException_1 = require("../../exceptions/ServerException");
// Selection du server
const serverSource = ServerSource_1.ServerSource.express;
const app = ServerServiceImpl_1.ServerServiceImpl.setServer(serverSource);
//Initilaisation du logger
LoggerServiceImpl_1.LoggerServiceImpl.setLogger(LoggerSource_1.LoggerSource.bunyan);
// Initilisation repositories
RepositoryServiceImpl_1.RepositoryServiceImpl.setRepositories(RepositorySources_1.RepositorySources.postgreSQL);
// Port
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
/**
 * Démarrage server fastify
 */
const fastify = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen({ port: PORT });
        console.log(`server listening on ${app.server.address().port}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
});
/**
 * Démarrage server express
 */
const express = () => {
    // Http Server
    const server = http_1.default.createServer(app);
    server.listen(PORT, () => {
        console.log(`server listening on http://localhost:${PORT}`);
    });
};
switch (serverSource) {
    case ServerSource_1.ServerSource.express:
        express();
        break;
    case ServerSource_1.ServerSource.fastify:
        fastify();
        break;
    default: throw new ServerException_1.ServerException('server not implmented');
}
