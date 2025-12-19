// models/registration.js

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    user: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true
    },
    // 'event' 
    event: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Registration', registrationSchema);