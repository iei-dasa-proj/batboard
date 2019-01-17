var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var ColumnSchema = new mongoose.Schema({
    id: Number,
    name: String,    
    board_id: {type: Number, ref: 'Board'}  
});
ColumnSchema.plugin(autoIncrement.plugin, {model: 'Column', field: 'id'});

module.exports = mongoose.model('Column', ColumnSchema);
