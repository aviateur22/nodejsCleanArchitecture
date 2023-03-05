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
const TodoDataAccess_1 = require("../../../../../helpers/dataAccess/TodoDataAccess");
exports.default = {
    /**
     * Récupération des todos
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    findAllTodos: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Récupération des Todos
        const todos = yield TodoDataAccess_1.TodoDataAccess.findAllTodos();
        res.json({
            todos
        });
    }),
    /**
     * Ajout d'une Todo
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    addTodo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        let { title, description } = req.body;
        // Ajout de la Todo
        const todo = yield TodoDataAccess_1.TodoDataAccess.addTodo(title, description);
        res.status(201).json({
            todo
        });
    }),
    /**
     * Update d'une Todo
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    updateTodo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Id de la Todo
        const id = req.params.id;
        // Contenu de la Todo
        const { title, description, status } = req.body;
        console.log(status);
        console.log('ici');
        console.log(status);
        // Mise a jour de la Todo
        const todo = yield TodoDataAccess_1.TodoDataAccess.updateTodo(id, title, description, status);
        res.status(200).json({
            todo
        });
    }),
    /**
     * Recherche d'une Todo
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    findOneTodo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Id de la Todo
        const id = req.params.id;
        const todo = yield TodoDataAccess_1.TodoDataAccess.findOneTodo(id);
        res.json({
            todo
        });
    }),
    /**
     * Suppression d'une Todo
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    delteOneTodo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // Id de la Todo
        const id = req.params.id;
        // Suppression
        const todo = yield TodoDataAccess_1.TodoDataAccess.deleteOneTodo(id);
        res.json({
            todo
        });
    }),
    /**
     * CheckToggle d'une Todo
     * @param { Request } req
     * @param { Response } res
     * @param { NextFunction } next
     */
    checkToggleOneTodo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // id Todo
        const id = req.params.id;
        // Status
        const { status } = req.body;
        // CheckToggle
        const todo = yield TodoDataAccess_1.TodoDataAccess.checkToggleOneTodo(id, status);
        res.json({
            todo
        });
    })
};
