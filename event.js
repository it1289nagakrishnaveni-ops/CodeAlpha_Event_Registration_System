const mongoose = require('mongoose');

// మనం Event లో ఏమేమి వివరాలు సేవ్ చేయాలో ఇక్కడ చెప్తున్నాం
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    maxParticipants: {
        type: Number,
        default: 100,
    },
    organizer: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Event', eventSchema);