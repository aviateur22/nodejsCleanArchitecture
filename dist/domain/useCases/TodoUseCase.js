"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUseCase = void 0;
const RepositoryServiceImpl_1 = require("../../infra/services/repository/RepositoryServiceImpl");
/**
 * UseCaseModel  ayant l'acces au repositories
 */
class TodoUseCase {
    constructor(useCases) {
        // Acces au repositories
        this.repositories = RepositoryServiceImpl_1.RepositoryServiceImpl.getRepository().todoRepository;
        this.useCases = useCases;
    }
}
exports.TodoUseCase = TodoUseCase;
