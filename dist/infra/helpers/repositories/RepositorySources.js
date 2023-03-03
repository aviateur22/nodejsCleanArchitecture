"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorySources = void 0;
/**
 * Source des données
 */
var RepositorySources;
(function (RepositorySources) {
    RepositorySources[RepositorySources["inMemory"] = 1] = "inMemory";
    RepositorySources[RepositorySources["postgreSQL"] = 2] = "postgreSQL";
})(RepositorySources || (RepositorySources = {}));
exports.RepositorySources = RepositorySources;
