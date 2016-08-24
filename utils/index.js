module.exports = function(app) {
    'use strict';

    const fs = require('fs');

    return {
        readFileAsync: function(path, method, route, fileName) {
            return new Promise(function(resolve, reject) {
                fs.readFile(`${path}/${fileName}`, function(err, data) {
                    console.log(`method: ${method.toUpperCase()} -> ${route}`);
                    if (err) {
                        return reject(err);
                    }

                    resolve(JSON.parse(data));
                });
            });
        }
    };
};