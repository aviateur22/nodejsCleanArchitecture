"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerServiceImpl = void 0;
const ServerException_1 = require("../../../exceptions/ServerException");
const ServerSelection_1 = require("../../helpers/server/ServerSelection");
/**
 * Implementation de la base de données
 */
class ServerServiceImpl {
    /**
     * Selection du server
     * @returns { void }
     */
    static setServer(serverSource) {
        if (typeof ServerServiceImpl.server === 'undefined') {
            const serverSelection = new ServerSelection_1.ServerSelection();
            ServerServiceImpl.server = serverSelection.getServer(serverSource);
        }
        return ServerServiceImpl.server;
    }
    /**
     * Renvoie le server
     * @returns {any}
     */
    static getServer() {
        if (typeof ServerServiceImpl.server === 'undefined') {
            throw new ServerException_1.ServerException('Server not configure');
        }
        return ServerServiceImpl.server;
    }
}
exports.ServerServiceImpl = ServerServiceImpl;
