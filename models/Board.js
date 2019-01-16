var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var BoardSchema = new mongoose.Schema({
    id: Number,
    name: String
});
BoardSchema.plugin(autoIncrement.plugin, {model: 'Board', field: 'id'});

module.exports = mongoose.model('Board', BoardSchema);
