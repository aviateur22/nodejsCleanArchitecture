"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("../../controllers/todo"));
const controllerHandler_1 = __importDefault(require("../../helpers/controllerHandler"));
const sanitizer_1 = __importDefault(require("../../middlewares/sanitizer"));
const bodyValidation_1 = __importDefault(require("../../middlewares/validations/bodyValidation"));
const paramValidation_1 = __importDefault(require("../../middlewares/validations/paramValidation"));
const schemas_1 = __importDefault(require("../../middlewares/validations/schemas"));
const router = express_1.default.Router();
// Accueil fonctionnement API 
router.get('/', (req, res) => {
    res.json({
        message: 'Bienvenue sur l\'API des Todos'
    });
});
// Ajout de 1 Todo
router.post('/', (0, controllerHandler_1.default)((0, bodyValidation_1.default)(schemas_1.default.addTodoSchema)), (0, controllerHandler_1.default)(sanitizer_1.default), (0, controllerHandler_1.default)(todo_1.default.addTodo));
// Récupération de tous les todos
router.get('/find-all-todos', (0, controllerHandler_1.default)(todo_1.default.findAllTodos));
// Update d'une Todo
router.patch('/:id', (0, controllerHandler_1.default)((0, paramValidation_1.default)(schemas_1.default.idParamSchema)), (0, controllerHandler_1.default)((0, bodyValidation_1.default)(schemas_1.default.updateTodoSchema)), (0, controllerHandler_1.default)(sanitizer_1.default), (0, controllerHandler_1.default)(todo_1.default.updateTodo));
// Recherche de 1 Todo
router.get('/:id', (0, controllerHandler_1.default)((0, paramValidation_1.default)(schemas_1.default.idParamSchema)), (0, controllerHandler_1.default)(todo_1.default.findOneTodo));
// Suppression de 1 Todo
router.delete('/:id', (0, controllerHandler_1.default)((0, paramValidation_1.default)(schemas_1.default.idParamSchema)), (0, controllerHandler_1.default)(todo_1.default.delteOneTodo));
// Check Toggle 1 Todo
router.patch('/toggle-check/:id', (0, controllerHandler_1.default)((0, paramValidation_1.default)(schemas_1.default.idParamSchema)), (0, controllerHandler_1.default)((0, bodyValidation_1.default)(schemas_1.default.checkToggleTodoSchema)), (0, controllerHandler_1.default)(sanitizer_1.default), (0, controllerHandler_1.default)(todo_1.default.checkToggleOneTodo));
exports.default = router;
