"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseServiceImpl = void 0;
const UseCases_1 = require("../helpers/useCases/UseCases");
/**
 * Implemantation des UseCases
 */
class UseCaseServiceImpl {
    /**
     * Récupération des UsesCases
     * @returns { UseCases }
     */
    static getUseCases() {
        if (!UseCaseServiceImpl.useCases) {
            UseCaseServiceImpl.useCases = new UseCases_1.UseCases();
        }
        return UseCaseServiceImpl.useCases;
    }
}
exports.UseCaseServiceImpl = UseCaseServiceImpl;
