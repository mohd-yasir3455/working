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
  CircularProgress,
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
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
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
    // takingBenefit: false, // New fieldi
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
    rulesRead: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData1, setFormData1] = useState({
    availingBenefits: false, // Boolean flag
  });

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
    if (formData.availingBenefits === null) {
      tempErrors.availingBenefits = "Please select an option.";
    }

    if (!formData.mobileNumber)
      tempErrors.mobileNumber = "Mobile number is required.";
    if (!formData.aadharNumber.match(/^\d{12}$/))
      tempErrors.aadharNumber = "Aadhar number must be a 12-digit number.";
    if (!formData.declaration)
      tempErrors.declaration =
        "You must declare that the information is correct.";
    if (!formData.rulesRead)
      tempErrors.rulesRead = "You must confirm that you have read the rules.";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    // Start loading
    setIsSubmitting(true);

    try {
      // Use environment variable for API base URL
      // const apiUrl ="https://www.beesfoundatio.com/api/form"
      const apiUrl = "http://localhost:5000/api/form";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // If the response contains JSON data
        alert("Registration successful");
        console.log("Server Response:", data);

        // Clear the form
        setFormData({
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
          rulesRead: false,
        });
      } else {
        const errorData = await response.json(); // Handle error response from server
        console.error("Server Error:", errorData);
        alert(`Registration failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed: Unable to connect to the server.");
    } finally {
      // Stop loading
      setIsSubmitting(false);
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
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Do you want to avail the benefits offered by the foundation"
                    name="availingBenefits"
                    value={formData.availingBenefits}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        availingBenefits: e.target.value === "true", // Convert string to boolean
                      })
                    }
                    error={!!errors.availingBenefits}
                    helperText={
                      errors.availingBenefits || "Please select one option."
                    }
                  >
                    <MenuItem value="true">Avail the benefits</MenuItem>
                    <MenuItem value="false">
                    Donate money for the education of underprivileged children
                    </MenuItem>
                  </TextField>
                </Grid>

                {formData.availingBenefits && (
                  <>
                    {/* Nominee 1 Details */}
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

                    {/* Nominee 2 Details */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Nominee 2 Name"
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
                  </>
                )}

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
                  {errors.declaration && (
                    <FormHelperText error>{errors.declaration}</FormHelperText>
                  )}
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
                  {errors.rulesRead && (
                    <FormHelperText error>{errors.rulesRead}</FormHelperText>
                  )}
                </Grid>

                {/* Submit and Redirect */}
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button fullWidth variant="outlined" component={Link} to="/">
                    Cancel
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
