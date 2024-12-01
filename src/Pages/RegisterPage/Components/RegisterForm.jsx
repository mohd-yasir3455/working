// src/components/RegistrationForm.jsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  Paper,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    dob: "",
    email: "",
    gender: "",
    occupation: "",
    aadharNumber: "",
    fatherName: "",
    address: "",
    district: "",
    state: "",
    nominee1: "",
    relationWithNominee1: "",
    nominee1Mobile: "",
    nominee2: "",
    relationWithNominee2: "",
    nominee2Mobile: "",
    disease: "",
    diseaseDescription: "",
    mobileNumber: "",
    homeMobileNumber: "",
    declaration: false,
    benefits: false,
    rulesRead: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.password) tempErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.gender) tempErrors.gender = "Please select your gender.";
    if (!formData.state) tempErrors.state = "State selection is required.";
    if (!formData.mobileNumber) tempErrors.mobileNumber = "Mobile number is required.";
    if (!formData.aadharNumber.match(/^\d{12}$/)) tempErrors.aadharNumber = "Aadhar number must be a 12-digit number.";
    if (!formData.declaration) tempErrors.declaration = "You must declare that the information is correct.";
    if (!formData.rulesRead) tempErrors.rulesRead = "You must confirm that you have read the rules.";
    return tempErrors;
  };

  const handleSubmit = async (e) => {

    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registration successful');
          // Optionally, redirect to another page or clear the form
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed');
      }
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.default,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              boxShadow: 2,
              p: 4,
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h4" gutterBottom align="center">
              Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Password Fields */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Make Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                  />
                </Grid>

                {/* Basic Information */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Date of Birth"
                    InputLabelProps={{ shrink: true }}
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    error={!!errors.gender}
                    helperText={errors.gender}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>

                {/* Additional Information */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Aadhar Number"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    error={!!errors.aadharNumber}
                    helperText={errors.aadharNumber}
                    inputProps={{ pattern: "[0-9]*", maxLength: 12 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Father's Name"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Address Section */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="District"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    select
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    error={!!errors.state}
                    helperText={errors.state}
                  >
                    {statesInIndia.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Nominee Details */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nominee 1 Name"
                    name="nominee1"
                    value={formData.nominee1}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Relation with Nominee 1"
                    name="relationWithNominee1"
                    value={formData.relationWithNominee1}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nominee 1 Mobile"
                    name="nominee1Mobile"
                    value={formData.nominee1Mobile}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Disease Information */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Do you have any disease?"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Disease Description"
                    name="diseaseDescription"
                    value={formData.diseaseDescription}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Home Mobile Number"
                    name="homeMobileNumber"
                    value={formData.homeMobileNumber}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Declaration and Rules */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleChange}
                      />
                    }
                    label="I declare that all information provided is correct."
                  />
                  {errors.declaration && <FormHelperText error>{errors.declaration}</FormHelperText>}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rulesRead"
                        checked={formData.rulesRead}
                        onChange={handleChange}
                      />
                    }
                    label="I have read and understood the rules."
                  />
                  {errors.rulesRead && <FormHelperText error>{errors.rulesRead}</FormHelperText>}
                </Grid>

                {/* Submit and Redirect */}
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    component={Link}
                    to="/login"
                    fullWidth
                    variant="outlined"
                    size="large"
                  >
                    Go to Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RegistrationForm;
