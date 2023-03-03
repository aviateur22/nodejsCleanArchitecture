"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorTestException_1 = require("../../../../../../../exceptions/ErrorTestException");
const multer_1 = __importDefault(require("multer"));
const controllerHandler_1 = __importDefault(require("../../helpers/controllerHandler"));
const bodyValidation_1 = __importDefault(require("../../middlewares/validations/bodyValidation"));
const schemaTest_1 = __importDefault(require("../../middlewares/validations/schemas/schemaTest"));
const router = express_1.default.Router();
const multerEngine = (0, multer_1.default)().none();
/**
 * Erreur
 */
router.get('/test-error', (0, controllerHandler_1.default)((req, res, next) => {
    throw new Error('Error Test');
}));
/**
 * Erreur managé
 */
router.get('/test-error-managed', (0, controllerHandler_1.default)((req, res, next) => {
    throw new ErrorTestException_1.ErrorTestException('managed error');
}));
/**
 * Test validation de données
 */
router.post('/test-email', multerEngine, (0, controllerHandler_1.default)((0, bodyValidation_1.default)(schemaTest_1.default)), (0, controllerHandler_1.default)((req, res, next) => {
    res.json({
        message: 'done'
    });
}));
exports.default = router;
