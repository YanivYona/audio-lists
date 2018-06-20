var mongoose = require('mongoose'),
    player = require('./player'),
    Schema = mongoose.Schema;

var audio = new Schema({
    id: {type: String},
    songname: {type: String},
    year: {type: Number},
    genre: {type: String},
    composer: {type: String},
    players: [player]
}, {collection: 'audios'});

module.exports = mongoose.model('newSong', audio);
