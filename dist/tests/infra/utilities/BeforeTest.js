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
exports.BeforeTest = void 0;
const SelectServices_1 = require("../../domain/utilities/SelectServices");
const TodoGenerator_1 = require("../../domain/utilities/TodoGenerator");
class BeforeTest {
    static resetParameter() {
        return __awaiter(this, void 0, void 0, function* () {
            // Selection logger
            SelectServices_1.SelectServices.selectLoggerSource();
            // Repositories
            SelectServices_1.SelectServices.SelectRepositoriesSource();
            // Clear tous les todos
            yield TodoGenerator_1.TodoGenerator.ClearAllTodos();
            // Add 2 todos
            yield TodoGenerator_1.TodoGenerator.CreateTodos();
        });
    }
}
exports.BeforeTest = BeforeTest;
