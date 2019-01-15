var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Board', BoardSchema);
