var bodyParser = require('body-parser');

exports.setRouts = function (app) {
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    app.use('/allEvents', function (req, res) {
        PlayerEvent.find({}, function (err, events) {
            res.send(events);
        });
    });

    app.use('/perfReport', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        console.log('ENDPOINT RECEIVED MESSAGE\n', req.body);
        res.status(200).json({ message: 'data received', data: req.body });
    });
};