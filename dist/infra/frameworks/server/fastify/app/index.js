"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("@fastify/cors"));
const corsOption_1 = __importDefault(require("./helpers/corsOption"));
const erros_1 = __importDefault(require("./middlewares/erros"));
const fastify = (0, fastify_1.default)({
    logger: true
});
// Cors
fastify.register(cors_1.default, (0, corsOption_1.default)());
// Router
fastify.register(router_1.default);
// Gestion des erreurs
fastify.setErrorHandler(erros_1.default);
exports.default = fastify;
