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
const UpdateTodoEntity_1 = require("../../domain/entities/todo/UpdateTodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const ValidationException_1 = require("../../exceptions/ValidationException");
const SelectServices_1 = require("./utilities/SelectServices");
const TodoGenerator_1 = require("./utilities/TodoGenerator");
describe('Update todo UseCase', () => {
    //Selection du repository
    SelectServices_1.SelectServices.SelectRepositoriesSource();
    // Instance UpdateTodo
    const updateTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().updateTodoUseCase;
    // Reset des repositories
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear tous les todos
        yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
        // Ajout de todos
        yield TodoGenerator_1.TodoGenerator.CreateTodos();
    }));
    // Mise a jour d'une todo
    it('Should update a todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Mise a jour des données
            const updateTodo = new UpdateTodoEntity_1.UpdateTodoEntity('1', 'mon nouveau titre', 'ma nouvelle description', false);
            // Mise à jour de la todo
            const todo = yield updateTodoUseCase.execute(updateTodo);
            expect(todo.id).toBe(updateTodo.id);
            expect(todo.status).toBe(updateTodo.status);
            expect(todo.title).toBe(updateTodo.title);
            expect(todo.description).toBe(updateTodo.description);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    // Refus d'une mise a jour d'une Todo
    it('Should throw UnvalidTodoTitleException because title is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Mise a jour des données
            const updateTodo = new UpdateTodoEntity_1.UpdateTodoEntity('1', '', 'ma nouvelle description', false);
            // Mise à jour de la todo
            const todo = yield updateTodoUseCase.execute(updateTodo);
            expect(todo).toBeFalsy();
        }
        catch (error) {
            expect(error).toBeInstanceOf(ValidationException_1.ValidationException);
        }
    }));
    // Echec mise a jour Todo avec une description vide
    it('Should update a Todo with an empty Description', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Mise a jour des données
            const updateTodo = new UpdateTodoEntity_1.UpdateTodoEntity('1', 'mon nouveau titre', '', false);
            // Mise à jour de la todo
            const todo = yield updateTodoUseCase.execute(updateTodo);
            expect(todo.id).toBe(updateTodo.id);
            expect(todo.status).toBe(updateTodo.status);
            expect(todo.title).toBe(updateTodo.title);
            expect(todo.description).toBe(updateTodo.description);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
});
