"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTodoEntity = void 0;
const TodoPropertyValidation_1 = require("../../helpers/validator/TodoPropertyValidation");
/**
 * FindTodo Entity pour la recherche d'une Todo
 */
class FindTodoEntity {
    constructor(id) {
        this.id = id;
        // Validation des propriétés de la todo
        new TodoPropertyValidation_1.TodoPropertyValidation(this);
    }
}
exports.FindTodoEntity = FindTodoEntity;
