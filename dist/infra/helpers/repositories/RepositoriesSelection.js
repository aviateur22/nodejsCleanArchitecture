"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesSelection = void 0;
const InMemoryToDoRepository_1 = require("../../repositories/inMemoryRepository/InMemoryToDoRepository");
const PostgreSQLToDoRepository_1 = require("../../repositories/postgreSQL/PostgreSQLToDoRepository");
const Repositories_1 = require("./Repositories");
const RepositorySources_1 = require("./RepositorySources");
class RepositoriesSelection {
    /**
     * Selection des repositories en fonction de la source
     * @param { number } repositorySource
     * @returns { Repositories }
     */
    getRepositories(repositorySource) {
        switch (repositorySource) {
            case RepositorySources_1.RepositorySources.inMemory:
                return this.sourceInMemory();
                break;
            case RepositorySources_1.RepositorySources.postgreSQL:
                return this.sourcePostgreSQL();
                break;
            default:
                return this.sourceInMemory();
                break;
        }
    }
    /**
     * Selection InMemory Repository
     * @returns { Repositories }
     */
    sourceInMemory() {
        const inMemoryToDoRepository = new InMemoryToDoRepository_1.InMemoryToDoRepository();
        return new Repositories_1.Repositories(inMemoryToDoRepository);
    }
    /**
     * Repository PostgreSQL
     * @returns { Repositories }
     */
    sourcePostgreSQL() {
        const postgreSQLItemRepository = new PostgreSQLToDoRepository_1.PostgreSQLToDoRepository();
        return new Repositories_1.Repositories(postgreSQLItemRepository);
    }
}
exports.RepositoriesSelection = RepositoriesSelection;
