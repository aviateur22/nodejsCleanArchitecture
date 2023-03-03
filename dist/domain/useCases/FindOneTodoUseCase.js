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
exports.FindOneTodoUseCase = void 0;
const TodoNotFindException_1 = require("../../exceptions/TodoNotFindException");
const TodoMapper_1 = require("../dtos/TodoMapper");
const TodoUseCase_1 = require("./TodoUseCase");
/**
 * Récupération d'une ToDo
 */
class FindOneTodoUseCase extends TodoUseCase_1.TodoUseCase {
    /**
     * Recherhce d'une Todo
     * @param {FindOneTodoSchema} todo
     * @returns {TodoEntity}
     */
    execute(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const findTodo = yield this.repositories.findOne(todo);
            if (!findTodo) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            return TodoMapper_1.TodoEntityMapper.getTodoEntity(findTodo);
        });
    }
}
exports.FindOneTodoUseCase = FindOneTodoUseCase;
