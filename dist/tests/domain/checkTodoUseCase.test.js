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
const CheckToggleTodoEntity_1 = require("../../domain/entities/todo/CheckToggleTodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const TodoNotFindException_1 = require("../../exceptions/TodoNotFindException");
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
describe('UseCase: getAllTodos', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    // Check Todo
    it('Should check-complete Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const checkToggleTodo = new CheckToggleTodoEntity_1.CheckToggleTodoEntity('1', true);
            // Check todo
            const todo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().CheckToggleTodoUseCase.execute(checkToggleTodo);
            // Récupération todo modifié
            const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute(checkToggleTodo);
            expect(todo.status).toBeTruthy();
            expect(findTodo.id.toString()).toBe(checkToggleTodo.id.toString());
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    // Uncheck Todo
    it('Should uncheck complete Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const checkToggleTodo = new CheckToggleTodoEntity_1.CheckToggleTodoEntity('1', false);
            // Uncheck todo
            const todo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().CheckToggleTodoUseCase.execute(checkToggleTodo);
            // Récupération todo modifié
            const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute(checkToggleTodo);
            expect(todo.status).toBeFalsy();
            expect(findTodo.id.toString()).toBe(checkToggleTodo.id.toString());
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    // Check Todo impossible car Todo non existante
    it('Should throw TodoNotfindException because Todo does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const checkToggleTodo = new CheckToggleTodoEntity_1.CheckToggleTodoEntity('3', true);
            // Check todo
            const todo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().CheckToggleTodoUseCase.execute(checkToggleTodo);
            expect(todo).toBeFalsy();
        }
        catch (error) {
            expect(error).toBeInstanceOf(TodoNotFindException_1.TodoNotFindException);
        }
    }));
});
