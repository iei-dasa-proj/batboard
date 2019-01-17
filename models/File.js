var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    id: Number,
    name: String,    
    content: Buffer,    
    created_date: { type: Date, default: Date.now },
    backlog_id: {type: Number, ref: 'Backlog'}
});

module.exports = mongoose.model('File', FileSchema);
