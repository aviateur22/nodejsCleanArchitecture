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
exports.InMemoryToDoRepository = void 0;
const TodoNotFindException_1 = require("../../../exceptions/TodoNotFindException");
const TodoModel_1 = require("../../models/TodoModel");
/**
 * Repository InMemory
 */
class InMemoryToDoRepository {
    constructor() {
        this.todos = [];
    }
    /**
     * Ajout d'un todo
     * @param {AddTodoSchema} todoSchema
     * @returns {TodoModel}
     */
    save(todoSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            // Index
            const index = this.todos.length === 0 ? 1 : Math.max(...this.todos.map(x => Number(x.id))) + 1;
            const todoModel = new TodoModel_1.TodoModel(index.toString(), todoSchema.title, todoSchema.description, todoSchema.status, new Date(), new Date());
            this.todos.push(todoModel);
            return todoModel;
        });
    }
    /**
     * Mise a jour d'une Todo
     * @param {UpdateTodoSchema} todoSchema
     * @returns {TodoModel}
     */
    updateOne(todoSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            // Index
            const index = Number(todoSchema.id);
            // Recherche Todo
            const findTodo = yield this.todos.find(todo => (todoSchema.id === todo.id));
            if (!findTodo) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            // Modification des propriété
            findTodo.title = todoSchema.title;
            findTodo.description = todoSchema.description;
            findTodo.updatedAt = new Date();
            const updateTodo = yield this.findOne(todoSchema);
            if (!updateTodo) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            return updateTodo;
        });
    }
    /**
     *
     * @param todoSchema
     * @returns
     */
    checkToggleItem(todoSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            // Index
            const index = Number(todoSchema.id);
            const findTodo = yield this.todos.find(todo => (todoSchema.id === todo.id));
            if (!findTodo) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            // Modification des propriété
            findTodo.status = todoSchema.status;
            findTodo.updatedAt = new Date();
            const updateTodo = yield this.findOne(todoSchema);
            if (!updateTodo) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            return updateTodo;
        });
    }
    /**
     * Renvoie les todos
     * @returns {Array<TodoModel>}
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Tris des todo du plus recent au plus ancien
            this.todos.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
            return this.todos;
        });
    }
    /**
     * Recherche d'une todo
     * @param {GetOneTodoSchema} todoSchema
     * @returns {TodoModel|null}
     */
    findOne(todoSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            const findTodo = yield this.todos.find(todo => (todoSchema.id === todo.id));
            return findTodo !== undefined ? findTodo : null;
        });
    }
    /**
     * Suppression d'une todo
     * @param {DeleteTodoSchema} TodoSchema
     */
    deleteOne(TodoSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            // Recherche de l'index
            const todoIndex = this.todos.findIndex(todo => todo.id === TodoSchema.id);
            if (todoIndex < 0) {
                throw new TodoNotFindException_1.TodoNotFindException('todo not find');
            }
            // Suppression de la todo
            this.todos.splice(todoIndex, 1);
            return true;
        });
    }
    /**
     * Suppression des Todos
     */
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.todos = [];
            return true;
        });
    }
}
exports.InMemoryToDoRepository = InMemoryToDoRepository;
