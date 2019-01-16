var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    id: Number,
    name: String,
    backlog_id: {type: Number, ref: 'Backlog'}
});
TaskSchema.plugin(autoIncrement.plugin, {model: 'Task', field: 'id'});
module.exports = mongoose.model('Task', TaskSchema);
