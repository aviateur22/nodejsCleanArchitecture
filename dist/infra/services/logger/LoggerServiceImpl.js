"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerServiceImpl = void 0;
const LoggerException_1 = require("../../../exceptions/LoggerException");
const LoggerSelection_1 = require("../../helpers/logger/LoggerSelection");
class LoggerServiceImpl {
    /**
     * Selection du Logger
     * @param { number } LoggerSource
     */
    static setLogger(LoggerSource) {
        if (!LoggerServiceImpl.logger) {
            const logger = new LoggerSelection_1.LoggerSelection();
            LoggerServiceImpl.logger = logger.getLogger(LoggerSource);
        }
    }
    /**
     * Récupération du logger
     * @returns { LoggerSchema }
     */
    static getLogger() {
        // Repository non défini
        if (typeof LoggerServiceImpl.logger === 'undefined') {
            throw new LoggerException_1.LoggerException('Logger not defined');
        }
        return LoggerServiceImpl.logger;
    }
}
exports.LoggerServiceImpl = LoggerServiceImpl;
