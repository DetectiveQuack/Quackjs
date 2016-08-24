module.exports = function(app) {
    'use strict';

    const fs = require('fs');

    return {
        createRouteAndSend: function(path, method, route, fileName) {
            app[method.toLowerCase()](route, function(req, res) {
                fs.readFile(`${path}/${fileName}`, function(err, data) {
                    console.log(`method: ${method} -> ${route}`);
                    if (err) {
                        res.status(500);
                        res.send(err);
                    }

                    res.send(JSON.parse(data));
                });
            });
        },

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