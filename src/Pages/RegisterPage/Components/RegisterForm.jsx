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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    dob: "",
    email: "",
    gender: "",
    bloodGroup: "",
    department: "",
    designation: "",
    schoolCollege: "",
    state: "",
    district: "",
    schoolAddress: "",
    workJobDistrict: "",
    homeAddress: "",
    homeDistrict: "",
    nominee1: "",
    relationWithNominee1: "",
    nominee1Mobile: "",
    nominee2: "",
    relationWithNominee2: "",
    nominee2Mobile: "",
    diseaseDescription: "",
    isAlreadyRegistered: false,
    mobileNumber: "",
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
    if (!formData.mobileNumber)
      tempErrors.mobileNumber = "Mobile number is required.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      console.log(formData);
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
                    label="Password"
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
                    select
                    label="Blood Group"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    {bloodGroups.map((group) => (
                      <MenuItem key={group} value={group}>
                        {group}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="School/College Name"
                    name="schoolCollege"
                    value={formData.schoolCollege}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Address Section */}
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
                    label="School Address"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Work/Job District"
                    name="workJobDistrict"
                    value={formData.workJobDistrict}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Home Address"
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                 
                <TextField
                    fullWidth
                    label="Home District"
                    name="homeDistrict"
                    value={formData.homeDistrict}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Nominee Section */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nominee 1"
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
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nominee 2"
                    name="nominee2"
                    value={formData.nominee2}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Relation with Nominee 2"
                    name="relationWithNominee2"
                    value={formData.relationWithNominee2}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nominee 2 Mobile"
                    name="nominee2Mobile"
                    value={formData.nominee2Mobile}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Health Information */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Disease Description (if any)"
                    name="diseaseDescription"
                    value={formData.diseaseDescription}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Already Registered Checkbox */}
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <label>
                    <input
                      type="checkbox"
                      name="isAlreadyRegistered"
                      checked={formData.isAlreadyRegistered}
                      onChange={handleChange}
                    />
                    Already Registered
                  </label>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
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
