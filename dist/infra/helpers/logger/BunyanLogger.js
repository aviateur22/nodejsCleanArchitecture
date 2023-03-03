"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BunyanLogger = void 0;
const bunyan_1 = __importDefault(require("bunyan"));
class BunyanLogger {
    constructor() {
        this.logger = bunyan_1.default.createLogger({
            name: 'todoApp',
            streams: [
                {
                    level: 'error',
                    path: './src/log/error.log',
                    type: 'rotating-file',
                    period: '1d',
                    count: 4,
                }
            ]
        });
    }
    /**
     * Log le message
     */
    logMessage(message) {
        this.logger.error(message);
    }
}
exports.BunyanLogger = BunyanLogger;
