"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryServiceImpl = void 0;
const RepositoryException_1 = require("../../../exceptions/RepositoryException");
const RepositoriesSelection_1 = require("../../helpers/repositories/RepositoriesSelection");
/**
 * Implementation de la base de données
 */
class RepositoryServiceImpl {
    /**
     * Selection repositories
     * @returns { void }
     */
    static setRepositories(selectRepositorySource) {
        if (typeof RepositoryServiceImpl.repositories === 'undefined') {
            const repositoriesSelection = new RepositoriesSelection_1.RepositoriesSelection();
            RepositoryServiceImpl.repositories = repositoriesSelection.getRepositories(selectRepositorySource);
        }
    }
    /**
     * Récupération du repository
     * @returns { Repositories }
     */
    static getRepository() {
        // Repository non défini
        if (typeof RepositoryServiceImpl.repositories === 'undefined') {
            throw new RepositoryException_1.RepositoryException('no repository selected');
        }
        return RepositoryServiceImpl.repositories;
    }
}
exports.RepositoryServiceImpl = RepositoryServiceImpl;
