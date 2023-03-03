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
const AddTodoEntity_1 = require("../../domain/entities/todo/AddTodoEntity");
const TodoEntity_1 = require("../../domain/entities/todo/TodoEntity");
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const ValidationException_1 = require("../../exceptions/ValidationException");
const SelectServices_1 = require("./utilities/SelectServices");
const TodoGenerator_1 = require("./utilities/TodoGenerator");
describe('UseCase: addItem', () => {
    //Selection du repository
    SelectServices_1.SelectServices.SelectRepositoriesSource();
    // Instance GetAllTodoUseCase
    const addTodoUseCase = UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().addTodoUseCase;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear tous les todos
        yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
    }));
    // Ajout d'un todo avec un titre et une description
    it('Should add one todo', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const addTodo = yield addTodoUseCase.execute({
                title: 'Mon Titre',
                description: 'Ma description',
                status: false
            });
            const todos = yield TodoGenerator_1.TodoGenerator.findAllTodos();
            expect(todos.length).toBe(1);
            expect(todos[0].description).toBe('Ma description');
            expect(todos[0].title).toBe('Mon Titre');
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
    // Ajout d'une todo sans titre
    it('Should throw missingTitleException because title is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const addTodoEntity = new AddTodoEntity_1.AddTodoEntity('', 'Ma description');
            // Ajout de la todo
            yield addTodoUseCase.execute(addTodoEntity);
            const todos = yield TodoGenerator_1.TodoGenerator.findAllTodos();
            expect(todos.length).toBe(0);
        }
        catch (error) {
            expect(error).toBeInstanceOf(ValidationException_1.ValidationException);
        }
    }));
    // Ajout d'une todo avec un titre et sans descriptuion 
    it('Should add one todo without description', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const addTodoEntity = new AddTodoEntity_1.AddTodoEntity('Mon titre', '');
            // Ajout de la todo
            const addTodo = yield addTodoUseCase.execute(addTodoEntity);
            const todos = yield TodoGenerator_1.TodoGenerator.findAllTodos();
            expect(todos[0]).toBeInstanceOf(TodoEntity_1.TodoEntity);
            expect(todos[0].id).toBe("1");
            expect(addTodo.title).toBe("Mon titre");
            expect(addTodo.description).toBe("");
            expect(todos.length).toBe(1);
        }
        catch (error) {
            expect(error).toBeFalsy();
        }
    }));
});
