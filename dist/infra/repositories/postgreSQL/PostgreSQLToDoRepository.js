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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLToDoRepository = void 0;
const databaseConnexion_1 = __importDefault(require("./databaseConnexion"));
/**
 * Base de données PostgreSQL
 */
class PostgreSQLToDoRepository {
    save(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const addTodo = yield databaseConnexion_1.default.query('INSERT INTO "todo" ("title", "description", "status") VALUES ($1 , $2, $3) RETURNING *', [
                todo.title, todo.description, todo.status
            ]);
            return addTodo.rows.shift();
        });
    }
    /**
     * Update Todo
     * @param {UpdateTodoSchema} todo
     */
    updateOne(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateTodo = yield databaseConnexion_1.default.query('UPDATE todo SET title=$1, description=$2 where id=$3 RETURNING *', [
                todo.title, todo.description, todo.id
            ]);
            return updateTodo.rows.shift();
        });
    }
    /**
     * ToogleCheck 1 todo
     * @param {CheckToggleTodoSchema} todo
     */
    checkToggleItem(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkTogleTodo = yield databaseConnexion_1.default.query('UPDATE todo SET status=$1 WHERE id=$2 RETURNING *', [
                todo.status, todo.id
            ]);
            return checkTogleTodo.rows.shift();
        });
    }
    /**
     * Recherche de toutes les todos
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield databaseConnexion_1.default.query('SELECT * FROM todo ORDER BY "createdAt" DESC');
            return todos.rows;
        });
    }
    /**
     * Recherche de une todo
     * @param todo
     */
    findOne(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const findTodo = yield databaseConnexion_1.default.query('SELECT * from "todo" WHERE id = $1', [
                todo.id
            ]);
            return findTodo.rows.shift();
        });
    }
    /**
     * Suppression d'une Todo
     * @param {DeleteTodoSchema} Todo
     */
    deleteOne(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteTodo = yield databaseConnexion_1.default.query('DELETE FROM todo WHERE id = $1', [
                todo.id
            ]);
            return true;
        });
    }
    /**
     * Suppression de tous les todos
     * @returns
     */
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteTodos = yield databaseConnexion_1.default.query('TRUNCATE "todo" RESTART IDENTITY');
            return true;
        });
    }
}
exports.PostgreSQLToDoRepository = PostgreSQLToDoRepository;
