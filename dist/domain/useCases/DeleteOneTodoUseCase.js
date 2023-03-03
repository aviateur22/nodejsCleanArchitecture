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
exports.DeleteOneTodoUseCase = void 0;
const DeleteTodoException_1 = require("../../exceptions/DeleteTodoException");
const TodoModel_1 = require("../../infra/models/TodoModel");
const TodoMapper_1 = require("../dtos/TodoMapper");
const TodoUseCase_1 = require("./TodoUseCase");
/**
 * Suppression d'une ToDo
 */
class DeleteOneTodoUseCase extends TodoUseCase_1.TodoUseCase {
    /**
     * Suppression d'une Todo
     * @param deleteTodo
     * @return { TodoEntity }
     */
    execute(deleteTodo) {
        return __awaiter(this, void 0, void 0, function* () {
            // Vérification existance de la Todo
            const findTodo = yield this.useCases.findOneTodoUseCase.execute(deleteTodo);
            // Suppresion de la Todo
            const successDelete = yield this.repositories.deleteOne(deleteTodo);
            if (!successDelete) {
                throw new DeleteTodoException_1.DeleteTodoException();
            }
            // Todo de supprimé
            return TodoMapper_1.TodoEntityMapper.getTodoEntity(new TodoModel_1.TodoModel(findTodo.id, findTodo.title, findTodo.description, findTodo.status, findTodo.createdAt, findTodo.updatedAt));
        });
    }
}
exports.DeleteOneTodoUseCase = DeleteOneTodoUseCase;
