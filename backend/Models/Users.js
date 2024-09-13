const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const registrationSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  department: String,
  designation: String,
  schoolCollege: String,
  state: {
    type: String,
    enum: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
      "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
      "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
      "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
      "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ],
    required: true
  },
  district: String,
  schoolAddress: String,
  workJobDistrict: String,
  homeAddress: String,
  homeDistrict: String,
  nominee1: String,
  relationWithNominee1: String,
  nominee1Mobile: String,
  nominee2: String,
  relationWithNominee2: String,
  nominee2Mobile: String,
  diseaseDescription: String,
  isAlreadyRegistered: {
    type: Boolean,
    default: false
  },
  mobileNumber: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Add timestamps to automatically include createdAt and updatedAt fields

// Create and export the model
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
