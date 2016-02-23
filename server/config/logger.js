"use strict";

let winston = require("winston");
let morgan = require("morgan");
let fs = require("fs");

let accessLogStream = fs.createWriteStream(`${__dirname}/../../logs/access.log`, {flags: "a"});
let morganLogger = morgan("combined", {stream: accessLogStream});

winston.emitErrs = true;

let logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: `${__dirname}/../../logs/jonmadison.com.log`,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: "debug",
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});


module.exports = logger;
module.exports.stream = {
    write: function(message){
        logger.info(message);
    }
};
module.exports.morgan = morganLogger;

