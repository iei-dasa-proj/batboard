var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    username: String,
    email: String,
    password: String,
    image_url: String,
    role: Number,
    created_date: { type: Date, default: Date.now }
});

// Create virtual method to have full name
UserSchema
    .virtual('name')
    .get(function () {
        return this.first_name + ', ' + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);
