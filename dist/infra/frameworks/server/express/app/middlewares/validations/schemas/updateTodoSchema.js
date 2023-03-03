"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = joi_1.default.object({
    // Id
    id: joi_1.default
        .any(),
    // Titre     
    title: joi_1.default
        .string()
        .required()
        .messages({
        'string.empty': 'title is mandatory',
        'string.pattern.base': 'incorrect title format',
        'any.required': 'title is mandatory'
    }),
    // Description
    description: joi_1.default
        .string()
        .min(0)
        .messages({
        'string.empty': 'description is mandatory',
        'string.pattern.base': 'incorrect description'
    }),
    status: joi_1.default
        .boolean()
        .required()
        .messages({
        'string.empty': 'status is mandatory',
        'string.pattern.base': 'incorrect status format',
        'any.required': 'status is mandatory'
    })
});
