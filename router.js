var bodyParser = require('body-parser'),
    dataHandler = require('./handlers/DataHandler');

exports.setRoutes = function (app) {
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    app.use('/allEvents', function (req, res) {
        PlayerEvent.find({}, function (err, events) {
            res.send(events);
        });
    });

    app.use('/perfReport', corsHandler, dataHandler); // todo: add report forwarding handler to send full data to SPLUNK

    app.use('/bin/showads.js', corsHandler, function (req, res) {
        res.sendFile(__dirname + '/bin/showads.js');
    });
};

function corsHandler (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.body.guid) {
        next();
    } else {
        res.send('');
    }
}