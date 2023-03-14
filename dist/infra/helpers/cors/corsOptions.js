"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * Config des Cors
 */
exports.default = () => {
    let corsOption = {
        credentials: true,
        methods: 'GET,PUT,PATCH,POST,DELETE',
        origin: ['']
    };
    // Récupéraion de domaines
    let CORS_ORIGIN;
    if (process.env.NODE_ENV === 'DEV' || process.env.NODE_ENV === 'test') {
        console.log('en dev');
        CORS_ORIGIN = process.env.CORS_ORIGIN_DEV;
    }
    else /**mode PRDODUCTION */ {
        console.log('en prod');
        CORS_ORIGIN = process.env.CORS_ORIGIN_PROD;
    }
    if (typeof CORS_ORIGIN !== 'undefined') {
        corsOption.origin = CORS_ORIGIN.split(',');
    }
    // Renvoi des Opions
    return corsOption;
};
