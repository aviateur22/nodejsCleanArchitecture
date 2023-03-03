"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTodoEntity = void 0;
const TodoPropertyValidation_1 = require("../../helpers/validator/TodoPropertyValidation");
/**
 * AddTodo Entité pour ajout d'un nouveau todo
 */
class AddTodoEntity {
    constructor(title, description) {
        this.description = description;
        this.title = title;
        this.status = false;
        // Validation des propriétés de la todo
        new TodoPropertyValidation_1.TodoPropertyValidation(this);
    }
}
exports.AddTodoEntity = AddTodoEntity;
