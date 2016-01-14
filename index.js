var http = require('http'),
    path = require('path'),
    express = require('express'),
    router = require('./router.js'),
    requirejs = require('requirejs'),
    app = express();

requirejs.config({
    nodeRequire: require
});

router.setRouts(app);

app.set('port', 9090);
app.set('case sensitive routing', false);

var server = app.listen(app.get('port') || 8080, function () {
    console.log("Server started on port " + server.address().port);
});