"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sanitize = void 0;
const xss_1 = __importDefault(require("xss"));
const sanitizer_1 = __importDefault(require("sanitizer"));
class Sanitize {
    /**
     * Nettoyage des données Body et Query
     * @param {Request} req
     * @returns {Request}
     */
    static sanitizeInput(req) {
        var _a;
        /**nettoyage des données params / body / query */
        let sanitizeDataBody = {};
        let sanitizeDataQuery = {};
        let sanitizeDataParams = {};
        for (let key in req.query) {
            let sanitizeString = (_a = req.query[key]) === null || _a === void 0 ? void 0 : _a.toString();
            sanitizeDataQuery[key] = sanitizeString;
        }
        for (let key in req.body) {
            sanitizeDataBody[key] = (0, xss_1.default)(sanitizer_1.default.escape(req.body[key].trim()));
        }
        for (let key in req.params) {
            sanitizeDataParams[key] = (0, xss_1.default)(sanitizer_1.default.escape(req.params[key].trim()));
        }
        /** mise à jour des données nettoyés*/
        req.body = sanitizeDataBody;
        req.query = sanitizeDataQuery;
        req.params = sanitizeDataParams;
        return req;
    }
}
exports.Sanitize = Sanitize;
