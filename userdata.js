const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    emaillog: {
        type: String,
        required: true,
        unique: true
    },
    passwordlog: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})
const User = mongoose.model('User', UserSchema);
module.exports = User;