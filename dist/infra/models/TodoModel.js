"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
/**
 * Model Item isuue de la base de données
 */
class TodoModel {
    constructor(id, title, description, status, createdAt, updatedAt) {
        this.id = id;
        this._title = title;
        this._description = description;
        this._status = status;
        this._updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
    // #region Setter et Getter
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set updatedAt(updatedAt) {
        this._updatedAt = updatedAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
}
exports.TodoModel = TodoModel;
