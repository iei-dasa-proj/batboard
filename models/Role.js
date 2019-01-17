var mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
  name: String,
  desc: String,
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);
