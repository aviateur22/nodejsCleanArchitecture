"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Path Invalide
 */
exports.default = (req, res, next) => {
    return res.status(404).json({
        message: 'invalid path'
    });
};
