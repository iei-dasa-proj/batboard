var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);
