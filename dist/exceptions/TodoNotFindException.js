"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoNotFindException = void 0;
/**
 * Exception Todo not find
 */
class TodoNotFindException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.TodoNotFindException = TodoNotFindException;
