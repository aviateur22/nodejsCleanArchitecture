"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectServices = void 0;
const LoggerSource_1 = require("../../../infra/helpers/logger/LoggerSource");
const RepositorySources_1 = require("../../../infra/helpers/repositories/RepositorySources");
const LoggerServiceImpl_1 = require("../../../infra/services/logger/LoggerServiceImpl");
const RepositoryServiceImpl_1 = require("../../../infra/services/repository/RepositoryServiceImpl");
/**
 * Selection des repo pour les tests
 */
class SelectServices {
    /**
     * Selection repo
     */
    static SelectRepositoriesSource() {
        RepositoryServiceImpl_1.RepositoryServiceImpl.setRepositories(RepositorySources_1.RepositorySources.inMemory);
    }
    /**
     * Selection Logger
     */
    static selectLoggerSource() {
        LoggerServiceImpl_1.LoggerServiceImpl.setLogger(LoggerSource_1.LoggerSource.bunyan);
    }
}
exports.SelectServices = SelectServices;
