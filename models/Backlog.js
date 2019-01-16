var mongoose = require('mongoose');

var BacklogSchema = new mongoose.Schema({
    id: Number, 
    title: String,
    desc: String,
    due_date: { type: Date },
    created_date: { type: Date, default: Date.now },
    column_id: {type: Number, ref: 'Column'}
});
BacklogSchema.plugin(autoIncrement.plugin, {model: 'Backlog', field: 'id'});
module.exports = mongoose.model('Backlog', BacklogSchema);
