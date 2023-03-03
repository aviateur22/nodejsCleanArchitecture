"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntity = void 0;
/**
 * Entity Todo du domain
 */
class TodoEntity {
    constructor(id, title, description, status, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.updatedAt = updatedAt,
            this.createdAt = createdAt;
    }
}
exports.TodoEntity = TodoEntity;
