"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSelection = void 0;
const ServerException_1 = require("../../../exceptions/ServerException");
const app_1 = __importDefault(require("../../frameworks/server/express/app"));
const app_2 = __importDefault(require("../../frameworks/server/fastify/app"));
const ServerSource_1 = require("./ServerSource");
/**
 * Selection du server
 */
class ServerSelection {
    /**
     * Selection du server
     * @param { number } serverSource
     * @returns { any }
     */
    getServer(serverSource) {
        switch (serverSource) {
            // Express
            case ServerSource_1.ServerSource.express:
                return this.loadExpress();
                break;
            // Fastfiy
            case ServerSource_1.ServerSource.fastify: break;
            default:
                throw new ServerException_1.ServerException('Server not configure');
                break;
        }
    }
    /**
     * Chargement server avec Express
     * @returns {any} - Express
     */
    loadExpress() {
        return app_1.default;
    }
    /**
     * Chargement server avec Fastify
     * @returns { any } - Fastify
     */
    loadFastify() {
        return app_2.default;
    }
}
exports.ServerSelection = ServerSelection;
