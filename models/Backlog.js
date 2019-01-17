var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var BacklogSchema = new mongoose.Schema({
    id: Number, 
    title: String,
    desc: String,
    priority: {
        type: String,
        enum: ['very_high', 'high', 'medium',"low"]
    },    
    due_date: { type: Date },
    created_date: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['in_progress', 'in_validation', 'done',"delayed"]
    },  
    column_id: {type: Number, ref: 'Column'}
});
BacklogSchema.plugin(autoIncrement.plugin, {model: 'Backlog', field: 'id'});
module.exports = mongoose.model('Backlog', BacklogSchema);
