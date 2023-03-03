"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerSelection = void 0;
const BunyanLogger_1 = require("./BunyanLogger");
/**
 * Selection du logger
 */
class LoggerSelection {
    /**
     * Renvoie un nouvelle instance de logger
     * @param { number } loggerSource
     * @returns { LoggerSchema }
     */
    getLogger(loggerSource) {
        switch (loggerSource) {
            // Bunyan
            case 1:
                return this.bunyanLogger();
                break;
            default:
                return this.bunyanLogger();
                break;
        }
    }
    /**
     * Logger Bunyan
     * @returns
     */
    bunyanLogger() {
        return new BunyanLogger_1.BunyanLogger();
    }
}
exports.LoggerSelection = LoggerSelection;
