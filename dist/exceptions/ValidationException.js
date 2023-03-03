"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
/**
 * Erreur de validation de données
 */
class ValidationException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ValidationException = ValidationException;
