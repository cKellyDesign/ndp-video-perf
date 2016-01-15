var mongoose = require('mongoose'),
    db = require('./models/db'),
    PlayerEvent = require('./models/playerEvent');

exports.setRouts = function (app) {
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    app.get('/success', function(req, res){
        res.send('SUCCESS!!!');
    });


    app.use('/playerEvent', function (req, res) {
        console.log(req.body);

        var eType = req.body.eType,
            startNow = req.body.startNow,
            endNow = req.body.endNow;

        new PlayerEvent({
            eType: eType,
            startNow: startNow,
            endNow: endNow
        }).save(function(err){
            if (err) res.send(err);
            res.json({ message: 'playerEv Created!' });
        });

    });

    app.use('/allEvents', function (req, res) {
        PlayerEvent.find({}, function (err, events) {
            res.send(events);
        });
    });
};