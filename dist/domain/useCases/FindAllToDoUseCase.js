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
exports.FindAllToDoUseCase = void 0;
const RepositoryServiceImpl_1 = require("../../infra/services/repository/RepositoryServiceImpl");
const TodoMapper_1 = require("../dtos/TodoMapper");
const TodoUseCase_1 = require("./TodoUseCase");
/**
 * Récupération de tous les Todos
 */
class FindAllToDoUseCase extends TodoUseCase_1.TodoUseCase {
    constructor() {
        super(...arguments);
        this.repositories = RepositoryServiceImpl_1.RepositoryServiceImpl.getRepository().todoRepository;
    }
    /**
     * Récupération des todos
     * @returns {Array<TodoEntity>}
     */
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const todoModels = yield this.repositories.findAll();
            return TodoMapper_1.TodoEntityMapper.getTodoEntities(todoModels);
        });
    }
}
exports.FindAllToDoUseCase = FindAllToDoUseCase;
