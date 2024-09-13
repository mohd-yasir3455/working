const express = require('express');
const router = express.Router();
const User = require('../Models/Users');
//we can use express-validator here for more validation 

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
            bloodGroup,
            department,
            designation,
            schoolCollege,
            state,
            district,
            schoolAddress,
            workJobDistrict,
            homeAddress,
            homeDistrict,
            nominee1,
            relationWithNominee1,
            nominee1Mobile,
            nominee2,
            relationWithNominee2,
            nominee2Mobile,
            diseaseDescription,
            isAlreadyRegistered,
            mobileNumber
        } = req.body;

        // Validate required fields
        if (!password || !confirmPassword || !name || !email || !gender || !state || !mobileNumber) {
            return res.status(400).json({ success: false, error: 'Required fields are missing' });
        }

        // Convert dob to Date object if it exists
        const dateOfBirth = dob ? new Date(dob) : null;
        if (dob && isNaN(dateOfBirth.getTime())) {
            return res.status(400).json({ success: false, error: 'Invalid date format for dob' });
        }

        // Create a new user document in the database
        await User.create({
            password,
            confirmPassword,
            name,
            dob: dateOfBirth, // Ensure dob is correctly formatted
            email,
            gender,
            bloodGroup,
            department,
            designation,
            schoolCollege,
            state,
            district,
            schoolAddress,
            workJobDistrict,
            homeAddress,
            homeDistrict,
            nominee1,
            relationWithNominee1,
            nominee1Mobile,
            nominee2,
            relationWithNominee2,
            nominee2Mobile,
            diseaseDescription,
            isAlreadyRegistered,
            mobileNumber
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
