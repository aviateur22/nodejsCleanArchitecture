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
const ServerServiceImpl_1 = require("../../infra/services/server/ServerServiceImpl");
const ServerSource_1 = require("../../infra/helpers/server/ServerSource");
const TodoGenerator_1 = require("../domain/utilities/TodoGenerator");
const BeforeTest_1 = require("./utilities/BeforeTest");
describe('findAlltodos', () => {
    // Selection Server Express
    const app = ServerServiceImpl_1.ServerServiceImpl.setServer(ServerSource_1.ServerSource.express);
    // Path
    const path = '/api/v1/todo/find-all-todos';
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield BeforeTest_1.BeforeTest.resetParameter();
    }));
    it('Should find all the todos avail', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get(path);
        expect(res.body).toHaveProperty('todos');
        expect(res.body.todos).toBeInstanceOf(Array);
        expect(res.body.todos.length).toBe(2);
    }));
    it('Should find no todos', () => __awaiter(void 0, void 0, void 0, function* () {
        // Clear tous les todos
        yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
        const res = yield (0, supertest_1.default)(app)
            .get(path);
        expect(res.body).toHaveProperty('todos');
        expect(res.body.todos.length).toBe(0);
    }));
});
