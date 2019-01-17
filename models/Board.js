var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var BoardSchema = new mongoose.Schema({
  name: String,
  from_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now }
});
BoardSchema.plugin(autoIncrement.plugin, {model: 'Board', field: 'id'});

module.exports = mongoose.model('Board', BoardSchema);
