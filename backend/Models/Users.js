const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    occupation: String,
    aadhaarNumber: String,
    fatherName: String,
    address: String,
    district: String,
    state: {
        type: String,
        required: true,
    },
    nominee1: String,
    relationWithNominee1: String,
    nominee1Mobile: String,
    nominee2: String,
    relationWithNominee2: String,
    nominee2Mobile: String,
    diseaseDescription: String,
    mobileNumber: {
        type: String,
        required: true,
    },
    homeMobileNumber: String,
    declaration: {
        type: Boolean,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
