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
const ServerSource_1 = require("../../infra/helpers/server/ServerSource");
const ServerServiceImpl_1 = require("../../infra/services/server/ServerServiceImpl");
const BeforeTest_1 = require("./utilities/BeforeTest");
const supertest_1 = __importDefault(require("supertest"));
describe('FindOne Todo', () => {
    // Server
    const app = ServerServiceImpl_1.ServerServiceImpl.setServer(ServerSource_1.ServerSource.express);
    // Path
    let path = '/api/v1/todo/1';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield BeforeTest_1.BeforeTest.resetParameter();
    }));
    // Recherche d'une Todo
    it('Should find the Todo', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get(path);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('todo');
        expect(res.body.todo.id).toBe('1');
        expect(res.body.todo.title).toBe('Title 1');
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
