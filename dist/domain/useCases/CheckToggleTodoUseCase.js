"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckToggleTodoUseCase = void 0;
const TodoMapper_1 = require("../dtos/TodoMapper");
const TodoUseCase_1 = require("./TodoUseCase");
/**
 * Usecase CheckToDoUseCase
 */
class CheckToggleTodoUseCase extends TodoUseCase_1.TodoUseCase {
    /**
     *
     * @param {CheckToggleTodoSchema} todo
     * @returns {TodoEntity}
     */
    execute(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(todo.status);
            // Recherche todo
            yield this.useCases.findOneTodoUseCase.execute(todo);
            // Mise a jour status
            const checkToggleTodo = yield this.repositories.checkToggleItem(todo);
            console.log(checkToggleTodo.status);
            // renvoie la Todo mis a jour
            return TodoMapper_1.TodoEntityMapper.getTodoEntity(checkToggleTodo);
        });
    }
}
exports.CheckToggleTodoUseCase = CheckToggleTodoUseCase;
