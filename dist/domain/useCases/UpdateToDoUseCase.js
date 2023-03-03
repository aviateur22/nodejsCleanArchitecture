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
exports.UpdateTodoUseCase = void 0;
const TodoModel_1 = require("../../infra/models/TodoModel");
const TodoMapper_1 = require("../dtos/TodoMapper");
const TodoUseCase_1 = require("./TodoUseCase");
/**
 * Mise a jour du contenue d'une Todo
 */
class UpdateTodoUseCase extends TodoUseCase_1.TodoUseCase {
    /**
     * Mise a jour d'une Todo
     * @param { UpdateTodoSchema } updateUseCase
     * @returns { TodoEntity }
     */
    execute(updateTodo) {
        return __awaiter(this, void 0, void 0, function* () {
            // Recherche existance todo
            yield this.useCases.findOneTodoUseCase.execute(updateTodo);
            // Mise a jour de données
            const todo = yield this.repositories.updateOne(updateTodo);
            return TodoMapper_1.TodoEntityMapper.getTodoEntity(new TodoModel_1.TodoModel(todo.id, todo.title, todo.description, todo.status, todo.createdAt, todo.updatedAt));
        });
    }
}
exports.UpdateTodoUseCase = UpdateTodoUseCase;
