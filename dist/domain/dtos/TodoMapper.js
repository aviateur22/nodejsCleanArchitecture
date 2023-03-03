"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntityMapper = void 0;
const TodoEntity_1 = require("../entities/todo/TodoEntity");
class TodoEntityMapper {
    /**
     * Mapper TodoModel vers  TodoEntity
     * @param { TodoModel } todo
     * @returns { TodoEntity }
     */
    static getTodoEntity(todo) {
        return new TodoEntity_1.TodoEntity(todo.id, todo.title, todo.description, todo.status, todo.createdAt, todo.updatedAt);
    }
    /**
     * Mapper Array<TodoModel> vers  Array<TodoEntity>
     * @param { Array<TodoModel> } todos
     * @returns { Array<TodoEntity>}
     */
    static getTodoEntities(todos) {
        // Array de TodoEntity
        let todoEntities = [];
        todos.forEach(todo => {
            todoEntities.push(TodoEntityMapper.getTodoEntity(todo));
        });
        return todoEntities;
    }
}
exports.TodoEntityMapper = TodoEntityMapper;
