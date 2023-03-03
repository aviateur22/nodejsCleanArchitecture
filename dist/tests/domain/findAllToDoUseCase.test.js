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
const TodoEntity_1 = require("../../domain/entities/todo/TodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const SelectServices_1 = require("./utilities/SelectServices");
const TodoGenerator_1 = require("./utilities/TodoGenerator");
describe('UseCase: getAllTodos', () => {
    //Selection du repository
    SelectServices_1.SelectServices.SelectRepositoriesSource();
    // Instance GetAllTodoUseCase
    const findAllToDoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase;
    // Reset de la base de données
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear tous les todos
        yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
        // Add 2 todos
        yield TodoGenerator_1.TodoGenerator.CreateTodos();
    }));
    it('Should find 2 todos', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Recupération des Todos
            const todos = yield findAllToDoUseCase.execute();
            expect(todos.length).toBe(2);
            expect(todos[0]).toBeInstanceOf(TodoEntity_1.TodoEntity);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    it('Should find no todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Clear tous les todos
            yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
            // Recupération des Todos
            const todos = yield findAllToDoUseCase.execute();
            expect(todos.length).toBe(0);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
});
