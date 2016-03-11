"use strict";

var log4js = require('log4js');


log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'file',
            "absolute": true,
            filename: __dirname + '/log/logService.log',
            "maxLogSize": 20480,
            category: 'serviceAngular'
        }]
});
var logger = log4js.getLogger('serviceAngular');


exports.constant = function () {
    return {
        confLog: logger
    };
};
