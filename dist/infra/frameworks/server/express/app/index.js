"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const error_1 = __importDefault(require("./middlewares/error"));
const notfound_1 = __importDefault(require("./middlewares/notfound"));
const corsOptions_1 = __importDefault(require("./helpers/corsOptions"));
const app = (0, express_1.default)();
// Cors
app.use((0, cors_1.default)((0, corsOptions_1.default)()));
//Permet de gerer les formulaire (pas les formData)
app.use(express_1.default.urlencoded({ extended: true }));
//parse en format json
app.use(express_1.default.json());
// Routes de l'application Todo
app.use(routers_1.default);
// Route 404
app.use(notfound_1.default);
// Route 500
app.use(error_1.default);
exports.default = app;
