exports.setRouts = function (app) {
    app.get('/', function(req, res){
        res.send('hello world');
    });
};