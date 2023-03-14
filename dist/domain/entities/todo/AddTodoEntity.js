"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTodoEntity = void 0;
const TodoPropertyValidation_1 = require("../../helpers/validator/TodoPropertyValidation");
/**
 * AddTodo Entité pour ajout d'un nouveau todo
 */
class AddTodoEntity {
    constructor(title, description) {
        this.description = description;
        this.title = title;
        this.status = false;
        // Validation des propriétés de la todo
        new TodoPropertyValidation_1.TodoPropertyValidation(this);
    }
}
exports.AddTodoEntity = AddTodoEntity;
// /**
//  * AddTodo Entité pour ajout d'un nouveau todo
//  */
// class AddTodoEntity implements AddTodoSchema {
//   readonly title!: string;
//   readonly description!: string;
//   readonly status: boolean=false;
//   constructor(object : Partial<AddTodoEntity>) {
//    for(const key of Object.keys(object)) {
//     // @ts-ignore
//     this[key] = object[key]
//    }
//   }
// }
// export { AddTodoEntity }
// mapper (data: object): EntityMapper<T> {
//   const useMapping = this.mapping.default
//   for (const key of Object.keys(useMapping)) {
//     this.data[key as keyof T] = data[useMapping[key as keyof object]]
//   }
//   return this
// }
