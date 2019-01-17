var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var AssignSchema = new mongoose.Schema({
    id: Number,
    backlog_id: {type: Number, ref: 'Backlog'},
    user_id: {type: Number, ref: 'User'}
});
AssignSchema.plugin(autoIncrement.plugin, {model: 'Assign', field: 'id'});
module.exports = mongoose.model('Assign', AssignSchema);
