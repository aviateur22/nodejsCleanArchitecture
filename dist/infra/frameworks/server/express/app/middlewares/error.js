"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorTestException_1 = require("../../../../../../exceptions/ErrorTestException");
const LoggerException_1 = require("../../../../../../exceptions/LoggerException");
const RepositoryException_1 = require("../../../../../../exceptions/RepositoryException");
const TodoNotFindException_1 = require("../../../../../../exceptions/TodoNotFindException");
const ValidationException_1 = require("../../../../../../exceptions/ValidationException");
const LoggerServiceImpl_1 = require("../../../../../services/logger/LoggerServiceImpl");
/**
 * Gestion des erreurs
 */
exports.default = (err, req, res, next) => {
    // Logger 
    const logger = LoggerServiceImpl_1.LoggerServiceImpl.getLogger();
    try {
        // Enregistre le message
        logger.logMessage(err.message);
        switch (err.constructor) {
            case ValidationException_1.ValidationException:
            case TodoNotFindException_1.TodoNotFindException:
            case ErrorTestException_1.ErrorTestException:
                return res.status(400).json({
                    errorMessage: err.message
                });
                break;
            case LoggerException_1.LoggerException:
            case RepositoryException_1.RepositoryException:
                return res.status(500).json({
                    errorMessage: err.message
                });
                break;
            case Error:
                return res.status(500).json({
                    errorMessage: 'server error'
                });
                break;
            default:
                return res.status(500).json({
                    errorMessage: 'server error'
                });
                break;
        }
    }
    catch (error) {
        // Enregistre le message
        logger.logMessage(err.message);
        /**erreur non managé */
        return res.status(500).json({
            errorMessage: 'server error'
        });
    }
};
