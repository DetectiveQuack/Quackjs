module.exports = function(app) {
    'use strict';

    const utils = require('./../../utils')(app);

    app.put('/dashboard', function(req, res) {
        let fileName;

        if (req.params.title === 'Test1') {
            fileName = 'title'
        } else if (req.params.grid_rows === 5) {
            fileName === 'grid'
        }

        utils.readFileAsync('./routes/dashboard/responses', 'PUT', '/dashboard', `${fileName}.json`)
            .then(function(data) {
                res.send(data);
            }).catch(function(err) {
                res.send(err);
            });
    });
}