"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Schema vérification modification status
exports.default = joi_1.default.object({
    id: joi_1.default
        .any(),
    status: joi_1.default
        .boolean()
        .required()
        .messages({
        'string.empty': 'status is mandatory',
        'string.pattern.base': 'incorrect status format',
        'any.required': 'status is mandatory'
    })
});
