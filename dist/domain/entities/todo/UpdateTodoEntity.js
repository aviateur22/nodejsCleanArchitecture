"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoEntity = void 0;
const TodoPropertyValidation_1 = require("../../helpers/validator/TodoPropertyValidation");
/**
 * UpdateTodo Entity pour mise a jour d'une todo
 */
class UpdateTodoEntity {
    constructor(id, title, description, status) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.status = status;
        // Validation des propriétés de la todo
        new TodoPropertyValidation_1.TodoPropertyValidation(this);
    }
}
exports.UpdateTodoEntity = UpdateTodoEntity;
