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
const FindTodoEntity_1 = require("../../domain/entities/todo/FindTodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const TodoNotFindException_1 = require("../../exceptions/TodoNotFindException");
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
describe('Find one TodoUseCase', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    // Recherhche d'une Todo
    it('Should find the Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const findTodoEntity = new FindTodoEntity_1.FindTodoEntity('1');
            const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute(findTodoEntity);
            expect(findTodo.id.toString()).toBe('1');
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    // Recherche d'une Todo qui n'existe pas
    it('Should throw TodoNotFindException because Todo not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const findTodoEntity = new FindTodoEntity_1.FindTodoEntity('3');
            const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute(findTodoEntity);
            expect(findTodo).toBeFalsy();
        }
        catch (error) {
            expect(error).toBeInstanceOf(TodoNotFindException_1.TodoNotFindException);
        }
    }));
});
