'use strict';

const fs = require('fs');

class Util {

    readFileAsync(path, method, route, fileName) {
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

module.exports = new Util();