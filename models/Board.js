var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
  name: String,
  from_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Board', BoardSchema);
