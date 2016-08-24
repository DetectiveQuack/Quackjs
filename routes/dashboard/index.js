module.exports = function(app) {
    'use strict';

    const utils = require('./../../utils');

    app.put('/dashboard/:id', function(req, res) {
        let fileName;

        if (req.body.title !== 'Home') {
            fileName = 'title';
        } else if (req.body.grid_rows === 5) {
            fileName = 'grid';
        }

        utils.readFileAsync('./routes/dashboard/responses', 'PUT', '/dashboard/:id', `${fileName}.json`)
            .then(function(data) {
                res.send(data);
            }).catch(function(err) {
                res.send(err);
            });
    });

}