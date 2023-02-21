/**
 * Logger  
 */

const bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: 'todoApp',
    streams: [
        {
            level: 'error',
            path: './src/log/error.log',
            type: 'rotating-file',
            period: '1d',
            count: 4,
        }
    ]
});
export default logger;