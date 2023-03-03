"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCases = void 0;
const AddToDoUseCase_1 = require("../../useCases/AddToDoUseCase");
const CheckToggleTodoUseCase_1 = require("../../useCases/CheckToggleTodoUseCase");
const DeleteOneTodoUseCase_1 = require("../../useCases/DeleteOneTodoUseCase");
const FindAllToDoUseCase_1 = require("../../useCases/FindAllToDoUseCase");
const FindOneTodoUseCase_1 = require("../../useCases/FindOneTodoUseCase");
const UpdateToDoUseCase_1 = require("../../useCases/UpdateToDoUseCase");
/**
 * UseCases disponibles dans le domaine
 */
class UseCases {
    constructor() {
        this.addTodoUseCase = new AddToDoUseCase_1.AddTodoUseCase(this);
        this.CheckToggleTodoUseCase = new CheckToggleTodoUseCase_1.CheckToggleTodoUseCase(this);
        this.updateTodoUseCase = new UpdateToDoUseCase_1.UpdateTodoUseCase(this);
        this.findOneTodoUseCase = new FindOneTodoUseCase_1.FindOneTodoUseCase(this);
        this.findAllToDoUseCase = new FindAllToDoUseCase_1.FindAllToDoUseCase(this);
        this.deleteOneTodoUseCase = new DeleteOneTodoUseCase_1.DeleteOneTodoUseCase(this);
    }
}
exports.UseCases = UseCases;
