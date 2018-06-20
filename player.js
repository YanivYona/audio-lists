var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var player =  new Schema({
    name: {type: String},
    role: {type: String}
});

module.exports = player;
