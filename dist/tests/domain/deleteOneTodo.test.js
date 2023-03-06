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
const DeleteTodoEntity_1 = require("../../domain/entities/todo/DeleteTodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const TodoNotFindException_1 = require("../../exceptions/TodoNotFindException");
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
describe('DeleteOneTodo useCase', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    // Suppression de une Todo
    it('Should delete one Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Todo a supprimé
            const deleteTodo = new DeleteTodoEntity_1.DeleteTodoEntity('1');
            // Suppression d'une Todo
            const todo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().deleteOneTodoUseCase.execute(deleteTodo);
            // Récupération des todos
            const todos = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
            expect(todo.id.toString()).toBe("1");
            expect(todos.length).toBe(1);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    //Echec suppression todo
    it('Should throw TodoNotFindException because todo does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Todo a supprimé
            const deleteTodo = new DeleteTodoEntity_1.DeleteTodoEntity('5');
            // Suppression d'une Todo
            const todo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().deleteOneTodoUseCase.execute(deleteTodo);
            // Récupération des todos
            const todos = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
            expect(todo).toBeFalsy();
            expect(todos.length).toBe(2);
        }
        catch (error) {
            expect(error).toBeInstanceOf(TodoNotFindException_1.TodoNotFindException);
        }
    }));
});
