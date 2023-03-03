"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
/**
 * Validation de Id d'une Todo
 */
exports.default = joi_1.default.object({
    id: joi_1.default
        .string()
        .min(1)
        .required()
        .messages({
        'string.empty': 'id is mandatory',
        'string.pattern.base': 'incorrect id format',
        'any.required': 'id is mandatory',
        'string.min': 'incorrect id format',
    })
});
