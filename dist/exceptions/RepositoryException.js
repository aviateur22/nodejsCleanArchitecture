"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryException = void 0;
class RepositoryException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.RepositoryException = RepositoryException;
