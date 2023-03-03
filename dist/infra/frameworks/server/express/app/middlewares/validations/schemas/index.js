"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addTodoSchema_1 = __importDefault(require("./addTodoSchema"));
const idParamSchema_1 = __importDefault(require("./idParamSchema"));
const schemaTest_1 = __importDefault(require("./schemaTest"));
const updateTodoSchema_1 = __importDefault(require("./updateTodoSchema"));
const checkToggleTodoSchema_1 = __importDefault(require("./checkToggleTodoSchema"));
// Export des schéma de vérification des todos
exports.default = {
    addTodoSchema: addTodoSchema_1.default,
    schemaTest: schemaTest_1.default,
    updateTodoSchema: updateTodoSchema_1.default,
    idParamSchema: idParamSchema_1.default,
    checkToggleTodoSchema: checkToggleTodoSchema_1.default
};
