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
exports.TodoDataAccess = void 0;
const UseCaseServiceImpl_1 = require("../../../domain/services/UseCaseServiceImpl");
const ValidationException_1 = require("../../../exceptions/ValidationException");
class TodoDataAccess {
    /**
     * Liste des todos
     * @returns { Array<TodoEntity>}
     */
    static findAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            // UseCase
            const findAllTodosUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase;
            const todos = yield findAllTodosUseCase.execute();
            return todos;
        });
    }
    /**
     * Ajout d'une todo
     * @param { string } title
     * @param { string } description
     * @returns { TodoEntity } - todo ajouté
     */
    static addTodo(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            // Vérification de la description
            if (typeof description === 'undefined') {
                description = '';
            }
            // Vérification de la description
            if (typeof title === 'undefined') {
                throw new ValidationException_1.ValidationException('title is mandatory');
            }
            // todo a envoyer
            const todo = {
                title,
                description,
                status: false
            };
            // UseCase
            const addTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().addTodoUseCase;
            const addTodo = yield addTodoUseCase.execute(todo);
            return addTodo;
        });
    }
    /**
     * Mise à jour d'une Todo
     * @param id
     * @param title
     * @param description
     * @param status
     */
    static updateTodo(id, title, description, status) {
        return __awaiter(this, void 0, void 0, function* () {
            // Vérification de la description
            if (typeof id === 'undefined') {
                throw new ValidationException_1.ValidationException('id is mandatory');
            }
            // Vérification de la description
            if (typeof description === 'undefined') {
                description = '';
            }
            // Vérification de la description
            if (typeof title === 'undefined') {
                throw new ValidationException_1.ValidationException('title is mandatory');
            }
            // Vérification de la description
            if (typeof status === 'undefined') {
                throw new ValidationException_1.ValidationException('status is mandatory');
            }
            // Todo a mettre a jour
            const todo = {
                id,
                title,
                description,
                status
            };
            // UseCase
            const updateTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().updateTodoUseCase;
            const updateTodo = yield updateTodoUseCase.execute(todo);
            return updateTodo;
        });
    }
    /**
     * Recherche de une Todo
     * @param { string } id
     * @returns { TodoEntity }
     */
    static findOneTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof id === 'undefined') {
                throw new ValidationException_1.ValidationException('id is mandatory');
            }
            const todo = {
                id
            };
            // UseCase
            const findOneTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase;
            const findTodo = yield findOneTodoUseCase.execute(todo);
            return findTodo;
        });
    }
    /**
     * Supprssion de une Todo
     * @param { string } id
     * @returns { TodoEntity }
     */
    static deleteOneTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof id === 'undefined') {
                throw new ValidationException_1.ValidationException('id is mandatory');
            }
            const todo = {
                id
            };
            // UseCase
            const deleteOneTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().deleteOneTodoUseCase;
            const deleteTodo = yield deleteOneTodoUseCase.execute(todo);
            return deleteTodo;
        });
    }
    /**
     * Check Toggle une Todo
     * @param { string } id
     * @param { boolean } status
     */
    static checkToggleOneTodo(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof id === 'undefined') {
                throw new ValidationException_1.ValidationException('id is mandatory');
            }
            if (typeof status === 'undefined') {
                throw new ValidationException_1.ValidationException('status is mandatory');
            }
            // Todo a mettre a jour
            const todo = {
                id,
                status
            };
            // UseCase
            const dcheckToggleOneTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().CheckToggleTodoUseCase;
            const checkTodo = yield dcheckToggleOneTodoUseCase.execute(todo);
            return checkTodo;
        });
    }
}
exports.TodoDataAccess = TodoDataAccess;
