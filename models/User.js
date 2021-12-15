const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        maxlength: 50,
        minlength: 5,
        unique: true
    },
    password: {
        type: String,
        maxlength: 50,
        minlength: 5
    },
    email: {
        type: String,
        minlength: 5
    },
    role: {
        type: Number,
        default: 0
    }
})

const UserInfo = mongoose.model('UserInfo', userSchema);

module.exports = { UserInfo }