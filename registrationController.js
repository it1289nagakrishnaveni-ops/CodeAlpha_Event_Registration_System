// controllers/registrationController.js

const Registration = require('../models/registration'); 

exports.registerUser = async (req, res) => {
    try {
        // **FINAL FIX:** Destructuring the correct field names from req.body (user, event)
        const { user, email, event } = req.body; 

        // 1. Validation check for required fields
        if (!user || !email || !event) {
            // Message updated to reflect the correct field names for clarity
            return res.status(400).json({ message: "All fields (user, email, event) are required." }); 
        }

        // 2. Create and Save the new registration entry
        // Mapping the received fields to the model fields (assuming your model uses {user, email, event})
        const newRegistration = new Registration({
            user, 
            email,
            event, 
        });

        await newRegistration.save();

        // 201 Status code (Created) on successful registration
        res.status(201).json({ 
            message: 'Registration successful!',
            registration: newRegistration 
        });

    } catch (error) {
        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Email already registered.' });
        }
        console.error('Registration error:', error.message);
        res.status(500).json({ message: 'Server error during registration.', error: error.message });
    }
};