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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const UseCaseServiceImpl_1 = require("../../domain/services/UseCaseServiceImpl");
const ServerSource_1 = require("../../infra/helpers/server/ServerSource");
const ServerServiceImpl_1 = require("../../infra/services/server/ServerServiceImpl");
const BeforeTest_1 = require("./utilities/BeforeTest");
describe('UpdateTodo', () => {
    // Server
    const app = ServerServiceImpl_1.ServerServiceImpl.setServer(ServerSource_1.ServerSource.express);
    let path = '/api/v1/todo/2';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield BeforeTest_1.BeforeTest.resetParameter();
    }));
    // Update Todo
    it('should update a Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            title: 'mon titre mis a jour',
            description: 'ma description mis a jour',
            status: true
        });
        // Récupération des Todos
        const todos = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
        expect(res.body).toHaveProperty('todo');
        expect(res.body.todo.id).toBe('2');
        expect(res.body.todo.title).toBe('mon titre mis a jour');
        expect(res.body.todo.description).toBe('ma description mis a jour');
        // Todos
        expect(todos.length).toBe(2);
        expect(todos[1].title).toBe('mon titre mis a jour');
    }));
    // Mise a jour todo avec description vide
    it('Should update a Todo with an empty description', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            title: 'mon titre mis a jour',
            description: '',
            status: true
        });
        // Récupération des Todos
        const todos = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
        expect(res.body).toHaveProperty('todo');
        expect(res.body.todo.id).toBe('2');
        expect(res.body.todo.title).toBe('mon titre mis a jour');
        expect(res.body.todo.description).toBe('');
        // Todos
        expect(todos.length).toBe(2);
        expect(todos[1].title).toBe('mon titre mis a jour');
    }));
    // Todo absente d ela base de données
    it('Should throw TodoNotfindException because Todo does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        path = '/api/v1/todo/5';
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            title: 'mon titre mis a jour',
            description: 'ma description mis a jour',
            status: true
        });
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('todo not find');
    }));
    // Todo - titre manuqant
    it('Should throw ValidationException because Title is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            title: '',
            description: 'ma nouvelle description',
            status: true
        });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('title is mandatory');
    }));
    // Todo - status manquant
    it('Should throw ValidationException because status is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            title: 'mon noveau titre',
            description: 'ma nouvelle description',
        });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('status is mandatory');
    }));
});
