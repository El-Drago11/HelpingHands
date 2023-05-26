const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegisterSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    lname: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        default: Date.now,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
    },
    efname: {
        type: String,
        required: true,
    },
    elname: {
        type: String,
        required: false,
    },
    Relationship: {
        type: String,
        required: true,
    },
    Contact: {
        type: String,
        required: true,
    },
    fdfname: {
        type: String,
        required: false,
    },
    fdlname: {
        type: String,
        require: false,
    },
    dc: {
        type: String,
        required: false,
    }
})
const register = mongoose.model('register', RegisterSchema);
module.exports = register;