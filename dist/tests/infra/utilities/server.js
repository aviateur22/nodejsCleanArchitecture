"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const http_1 = __importDefault(require("http"));
const ServerSource_1 = require("../../../infra/helpers/server/ServerSource");
const ServerServiceImpl_1 = require("../../../infra/services/server/ServerServiceImpl");
//import app from '../../../infra/frameworks/app'
/**
 * Class pour test uniatire
 */
class Server {
    constructor(port) {
        this.port = port;
    }
    /**
     * Démarrage du server
     */
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            // Selection du server
            const app = ServerServiceImpl_1.ServerServiceImpl.setServer(ServerSource_1.ServerSource.express);
            // Chargement du server
            const server = http_1.default.createServer(app);
            server.listen(this.port, () => {
                console.log(`http://localhost:${this.port}`);
            });
        });
    }
}
exports.Server = Server;
