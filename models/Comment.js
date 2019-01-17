var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    id: Number,
    message: String,
    date: { type: Date, default: Date.now },
    created_date: { type: Date, default: Date.now },
    user_id: Number,
    backlog_id: {type: Number, ref: 'Backlog'},
    user_id: {type: Number, ref: 'User'}
});
CommentSchema.plugin(autoIncrement.plugin, {model: 'Comment', field: 'id'});

module.exports = mongoose.model('Comment', CommentSchema);
