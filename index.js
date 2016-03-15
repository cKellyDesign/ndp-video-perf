var http = require('http'),
    path = require('path'),
    express = require('express'),
    router = require('./router.js'),
    requirejs = require('requirejs'),
    bodyParser = require('body-parser'),
    app = express();

requirejs.config({
    nodeRequire: require
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.setRoutes(app);

app.set('port', 9010);
app.set('case sensitive routing', false);

var server = app.listen(process.env.PORT || 9010, function () {
    console.log("Server started on port " + server.address().port);
});