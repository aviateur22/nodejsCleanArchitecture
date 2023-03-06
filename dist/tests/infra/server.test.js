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
const server_1 = require("./utilities/server");
const TestUtilities_1 = require("../utilities/TestUtilities");
// Selection Server Express
const testUtilities = new TestUtilities_1.TestUtilities();
// Selection des services pour les tests
testUtilities.selectService();
describe('StartServer', () => {
    // Jest app
    const app = testUtilities.getBackend();
    // Start Server et vérification
    it('Should Start a server and get message "Bienvenue sur l\'API des Todos"', () => __awaiter(void 0, void 0, void 0, function* () {
        const server = new server_1.Server('5000');
        yield server.startServer();
        const res = yield (0, supertest_1.default)(app)
            .get('/api/v1/todo');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('Bienvenue sur l\'API des Todos');
    }));
    // Path invalide
    it('Path Should throw error 404 because path is unvalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get('/api/v1/unvalid-path');
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('invalid path');
    }));
    // Path avec controller en erreur
    it('Path Should throw error 500', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get('/test-error');
        expect(res.statusCode).toBe(500);
        //expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('server error');
    }));
    // Path avec Erreur managé
    it('Path Should throw error 400', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get('/test-error-managed');
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('managed error');
    }));
    // Path vérification email
    it('Should throw error 400 because email format is not valid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .post('/test-email')
            .set('Accept', 'application/json')
            .send({
            email: 'avia'
        });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('errorMessage');
        expect(res.body.errorMessage).toBe('incorrect email format');
    }));
    // Path vérification email
    it('Should res with a statusCode of 200 because meail is valid', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .post('/test-email')
            .set('Accept', 'application/json')
            .send({
            email: 'avia@hotmail.fr'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('done');
    }));
});
