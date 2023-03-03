"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSource = void 0;
/**
 * Source des servers
 */
var ServerSource;
(function (ServerSource) {
    ServerSource[ServerSource["express"] = 1] = "express";
    ServerSource[ServerSource["fastify"] = 2] = "fastify";
})(ServerSource = exports.ServerSource || (exports.ServerSource = {}));
