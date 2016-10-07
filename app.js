    'use strict';

    const app = require('express')(),
        cors = require('cors'),
        fs = require('fs'),
        walk = require('walk'),
        walker = walk.walk('./responses', {
            followLinks: false
        }),
        utils = require('./utils'),
        bodyParser = require('body-parser');

    require('./routes')(app);

    app.use(cors());

    app.use(bodyParser.json()); // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));

    app.listen(5477, function() {
        console.log(`
                #############################################
                ############__---~~~~~|~~~~~--__#############
                ########.-~~          |          ~~-.########
                #####.-~     .-~~~~-. |              ~-.#####
                ####/       {  o     }|                 \\####
                ###/        /       / |  QuackJS         \\###
                ##|        \`--r'   {  | ,___.-',         |###
                ##|          /      ~-|         ',        |##
                ##|---------{---------|----------'--------|##
                ##|          \\        |         /         |##
                ##|           \\       |        /          |##
                ###\\         ~ ~~~~~~~|~~~~~~~~~ ~       /###
                ####\\       ~ ~ ~ ~ ~ | ~ ~ ~ ~ ~ ~     /####
                #####\\\`-_     ~ ~ ~ ~ ~|~ ~ ~ ~ ~ ~    _-'###
                ########\\\`-__    ~ ~ ~ | ~ ~ ~ ~   __-'######
                ############~~---_____|_____---~~############
                #############################################

                        QuackJS listening on 5477             `);
    });

    //Create route by walking the responses directory
    walker.on('file', function(path, file, next) {
        //slices path and file name to be something like /auth/find, do not add file name if file is index.json
        let route = `${path.slice(11)}/${file.name === 'index.json' ? '' : file.name.slice(0, -5)}`,
            //gets method, if not in folder then all methods
            method = path.match(/GET|POST|PUT|DELETE/) || ['ALL'];

        //remove method from route
        route = route.replace(/GET\/|POST\/|PUT\/|DELETE\//, '');

        //ignore files beginning with `.`
        if (file.name.startsWith('.')) {
            return next();
        }
        console.log(route);
        app[method[0].toLowerCase()](route, function(req, res) {
            fs.readFile(`${path}/${file.name}`, function(err, data) {
                console.log(`method: ${method[0].toLowerCase()} -> ${route}`);
                if (err) {
                    res.status(500);
                    res.send(err);
                }

                res.send(JSON.parse(data));
            });
        });


        next();
    });