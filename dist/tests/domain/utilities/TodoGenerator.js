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
exports.TodoGenerator = void 0;
const UseCaseServiceImpl_1 = require("../../../domain/services/UseCaseServiceImpl");
const RepositoryServiceImpl_1 = require("../../../infra/services/repository/RepositoryServiceImpl");
/**
 * Gestion des todos pour les tests unitaire
 */
class TodoGenerator {
    /**
     * Récupération du repository
     * @returns { TodoRepositorySchema }
     */
    static getRepository() {
        return RepositoryServiceImpl_1.RepositoryServiceImpl.getRepository().todoRepository;
    }
    /**
     *
     */
    static CreateTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            TodoGenerator.todos.forEach((todo) => __awaiter(this, void 0, void 0, function* () {
                yield TodoGenerator.getRepository().save(todo);
            }));
        });
    }
    /**
     * Suppresion de tous les todos
     */
    static ClearAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            TodoGenerator.getRepository().deleteAll();
        });
    }
    /**
     * Renvoi les Todo
     */
    static findAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UseCaseServiceImpl_1.UseCaseServiceImpl.getUseCases().findAllToDoUseCase.execute();
        });
    }
}
exports.TodoGenerator = TodoGenerator;
/**
 * Todos a ajouter
 */
TodoGenerator.todos = [
    {
        title: 'Title 1',
        description: 'Description 1',
        status: false
    },
    {
        title: 'Title 2',
        description: 'Description 2',
        status: false
    }
];
