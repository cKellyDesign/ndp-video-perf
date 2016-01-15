var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var playerEventSchema = new Schema({
    eType: String,
    //startRef: String,
    //endRef: String,
    startNow: Number,
    endNow: Number,
    duration: Number
});

module.exports = mongoose.model('PlayerEvent', playerEventSchema);