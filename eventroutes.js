const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Lowercase 'event' is correct for your file name

// 1. GET /api/events 
router.get('/', (req, res) => {
    const dummyEvents = [
        { id: 'e1', title: 'JS Workshop', date: '2026-03-15', location: 'Online' },
        { id: 'e2', title: 'Fullstack Conference', date: '2026-04-20', location: 'Hyderabad' },
    ];
    res.json(dummyEvents);
});

// 2. GET /api/events/:id 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id === 'e1') {
        return res.json({ id: 'e1', title: 'JS Workshop', description: 'Advanced JavaScript topics.' });
    }
    res.status(404).json({ message: 'Event not found' });
});

// 3. POST /api/events
router.post('/', (req, res) => {
    res.status(201).json({ 
        message: 'Event created successfully (Dummy response)', 
        eventData: req.body 
    });
});

module.exports = router; //