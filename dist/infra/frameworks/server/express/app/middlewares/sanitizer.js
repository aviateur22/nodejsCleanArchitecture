"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xss_1 = __importDefault(require("xss"));
const sanitizer_1 = __importDefault(require("sanitizer"));
/**
 * Sanitizer
 */
exports.default = (req, res, next) => {
    var _a;
    /**nettoyage des données params / body / query */
    let sanitizeDataBody = {};
    let sanitizeDataQuery = {};
    let sanitizeDataParams = {};
    for (let key in req.query) {
        let queryDataString = (_a = req.query[key]) === null || _a === void 0 ? void 0 : _a.toString();
        if (typeof queryDataString === 'undefined') {
            sanitizeDataQuery[key] = queryDataString;
        }
        else {
            sanitizeDataQuery[key] = sanitizeData(typeof req.query[key], queryDataString);
        }
    }
    for (let key in req.body) {
        sanitizeDataBody[key] = sanitizeData(typeof req.body[key], req.body[key]);
    }
    for (let key in req.params) {
        sanitizeDataParams[key] = sanitizeData(typeof req.params[key], req.params[key]);
    }
    /**
     * Traitement des données
     * @param {string} dataType
     * @param {string} dataToSanitize
     */
    function sanitizeData(dataType, dataToSanitize) {
        switch (dataType) {
            case 'string':
            case 'number':
                return (0, xss_1.default)(sanitizer_1.default.escape(dataToSanitize).trim());
                break;
            case 'boolean':
                return dataToSanitize;
                break;
            default:
                return (0, xss_1.default)(sanitizer_1.default.escape(dataToSanitize));
                break;
        }
    }
    /** mise à jour des données nettoyés*/
    req.body = sanitizeDataBody;
    req.query = sanitizeDataQuery;
    req.params = sanitizeDataParams;
    next();
};
