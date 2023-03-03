"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config = {};
/**la variable NODE_ENV est inclue dans HEROKU */
if (process.env.NODE_ENV === 'production') {
    console.log(`database.js - ENV: production - DATABASE: ${process.env.DATABASE_URL}`);
    config.connectionString = process.env.DATABASE_URL;
    config.ssl = {
        rejectUnauthorized: false,
    };
}
else {
    console.log(`database.js - ENV: DEV - DATABASE: ${process.env.DATABASE_URL}`);
    config.connectionString = process.env.DATABASE_URL;
}
;
const pool = new pg_1.Pool(config);
exports.default = pool;
