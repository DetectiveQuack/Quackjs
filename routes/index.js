module.exports = function(app) {
    const walk = require('walk'),
        walker = walk.walk('./routes', {
            followLinks: false
        });

    walker.on('file', function(path, file, next) {
        if (file.name === 'index.js' && path !== './routes') {
            require(`./${path.slice(8)}/${file.name}`)(app);
        }
        next();
    });
}