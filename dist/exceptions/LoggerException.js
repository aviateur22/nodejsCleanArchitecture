"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerException = void 0;
/**
 * Logger exception
 */
class LoggerException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.LoggerException = LoggerException;
