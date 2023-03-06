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
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
// Suppression d'une Todo
describe('ToggleCheck Todo', () => {
    // Jest app
    const app = testUtilities.getBackend();
    // Path
    let path = '/api/v1/todo/toggle-check/1';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    // Succes check Todo
    it('Should check one Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            status: true
        });
        // Récupération des Todos
        const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute({
            id: "1"
        });
        expect(res.body).toHaveProperty('todo');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('todo');
        expect(res.body.todo.id.toString()).toBe('1');
        expect(res.body.todo.status).toBeTruthy();
        expect(findTodo.status).toBeTruthy();
    }));
    // Success unCheck Todo
    it('Should unCheck one Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .patch(path)
            .send({
            status: false
        });
        // Récupération des Todos
        const findTodo = yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findOneTodoUseCase.execute({
            id: "1"
        });
        expect(res.body).toHaveProperty('todo');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('todo');
        expect(res.body.todo.id.toString()).toBe('1');
        expect(res.body.todo.status).toBeFalsy();
        expect(findTodo.status).toBeFalsy();
    }));
    // Recherhche Todo qui n'existe pas
    it('Should throw TodoNotfindException because Todo does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        // Path
        path = '/api/v1/todo/5';
        const res = yield (0, supertest_1.default)(app)
            .get(path);
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('todo not find');
        expect(res.body.todo).toBeFalsy();
    }));
});
