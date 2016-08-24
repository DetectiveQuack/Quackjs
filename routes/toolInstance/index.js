module.exports = function(app) {

    const utils = require('./../../utils')(app);

    app.post('/toolinstance', function(req, res) {
        utils.readFileAsync('./routes/toolInstance/responses', 'POST', '/toolinstance', `${req.body.tool}.json`)
            .then(function(data) {
                res.send(data);
            }).catch(function(err) {
                res.send(err);
            });
    });

    app.delete('/toolinstance/:id', function(req, res) {
        const id = req.params.id;

        res.send({
            'title': 'Fake',
            'rows': 2,
            'columns': 2,
            'top_left_grid_position_row': 0,
            'top_left_grid_position_column': 2,
            'settings': {},
            'confirm_on_delete': null,
            'uuid': '96e2d5b7-34f1-4cdf-a293-e1cc2a1e1dfe',
            'created_at': new Date(),
            'updated_at': new Date(),
            'id': id,
            'tool': 16,
            'dashboard': 25,
            'created_by': 815,
            'updated_by': 815
        });
    });
}