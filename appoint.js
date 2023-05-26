const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointSchema = new Schema({
    inputName: {
        type: String,
        required: true,
    },
    inputEmail4: {
        type: String,
        required: true,
        unique: true
    },
    inputNumber: {
        type: String,
        required: true,
    },
    inputDate: {
        type: Date,
        default: Date.now,
    },
    inputDepartment: {
        type: String,
        required: true,
    },
    inputDoctor: {
        type: String,
        required: true,
    },
    exampleFormControlTextarea1: {
        type: String,
        required: false,
    },
})
const Appoint = mongoose.model('Appoint', AppointSchema);
module.exports = Appoint;