// server.js
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

 const registrationRoutes = require('./routes/registrationroutes');

const app = express();
app.use(express.json()); // Essential for reading JSON data from Postman
app.use(express.urlencoded({extended:true})); 
app.use('/api/register', registrationRoutes); // Sets the base path for registration routes

// ********** 4. MongoDB Connection **********
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eventdb';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully')) // Server connection success
    .catch(err => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`)); // Server listening success