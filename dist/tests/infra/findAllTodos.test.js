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
const TodoGenerator_1 = require("../utilities/TodoGenerator");
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
describe('findAlltodos', () => {
    // Jest app
    const app = testUtilities.getBackend();
    // Path
    const path = '/api/v1/todo/find-all-todos';
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testUtilities.resetParam();
    }));
    it('Should find all the todos avail', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('test');
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
