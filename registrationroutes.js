// routes/registrationroutes.js

const express = require('express');
const router = express.Router();

// Import the Controller logic (Path is crucial here: two dots '..' go up one level)
const registrationController = require('../controllers/registrationController.js'); 

// Register route definition (POST request)
router.post('/', registrationController.registerUser);
module.exports = router;