var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String,
    image_url: String,
    role: Number,
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
