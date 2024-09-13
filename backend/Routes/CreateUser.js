const express = require('express');
const router = express.Router();
const User = require('../Models/Users');

// POST route for form data
router.post('/form', async (req, res) => {
    try {
        // Destructure and validate fields from the request body
        const {
            password,
            confirmPassword,
            name,
            dob,
            email,
            gender,
            occupation,
            aadhaarNumber,
            fatherName,
            address,
            district,
            state,
            nominee1,
            relationWithNominee1,
            nominee1Mobile,
            nominee2,
            relationWithNominee2,
            nominee2Mobile,
            diseaseDescription,
            mobileNumber,
            homeMobileNumber,
            declaration
        } = req.body;

        // Validate required fields
        if (!password || !confirmPassword || !name || !email || !gender || !state || !mobileNumber) {
            return res.status(400).json({ success: false, error: 'Required fields are missing' });
        }

        // Ensure that password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, error: 'Passwords do not match' });
        }

        // Convert dob to Date object if it exists
        const dateOfBirth = dob ? new Date(dob) : null;
        if (dob && isNaN(dateOfBirth.getTime())) {
            return res.status(400).json({ success: false, error: 'Invalid date format for dob' });
        }

        // Create a new user document in the database (without confirmPassword)
        await User.create({
            password,
            confirmPassword,
            name,
            dob: dateOfBirth, // Ensure dob is correctly formatted
            email,
            gender,
            occupation,
            aadhaarNumber,
            fatherName,
            address,
            district,
            state,
            nominee1,
            relationWithNominee1,
            nominee1Mobile,
            nominee2,
            relationWithNominee2,
            nominee2Mobile,
            diseaseDescription,
            mobileNumber,
            homeMobileNumber,
            declaration
        });

        // Send a success response
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        // Send a failure response with the error message
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
