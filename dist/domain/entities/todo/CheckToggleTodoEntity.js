"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckToggleTodoEntity = void 0;
const TodoPropertyValidation_1 = require("../../helpers/validator/TodoPropertyValidation");
/**
 * CheckTogglEntity pour la modification du statut d'une Todo
 */
class CheckToggleTodoEntity {
    constructor(id, status) {
        this.id = id;
        this.status = status;
        // Validation des propriétés de la todo
        new TodoPropertyValidation_1.TodoPropertyValidation(this);
    }
}
exports.CheckToggleTodoEntity = CheckToggleTodoEntity;
