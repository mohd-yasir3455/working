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

const labels = {
  en: {
    registrationForm: "Registration Form",
    password: "Make Password",
    confirmPassword: "Confirm Password",
    name: "Name",
    dob: "Date of Birth",
    email: "Email",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    occupation: "Occupation",
    aadharNumber: "Aadhar Number",
    fatherName: "Father's Name",
    address: "Address",
    district: "District",
    state: "State",
    availingBenefits:
      "Do you want to avail the benefits offered by the foundation?",
    avail: "Avail the benefits",
    donate: "Donate money for the education of underprivileged children",
    nominee1: "Nominee 1 Name",
    relationWithNominee1: "Relation with Nominee 1",
    nominee1Mobile: "Nominee 1 Mobile",
    nominee2: "Nominee 2 Name",
    relationWithNominee2: "Relation with Nominee 2",
    nominee2Mobile: "Nominee 2 Mobile",
    disease: "Do you have any disease?",
    diseaseDescription: "Disease Description",
    mobileNumber: "Mobile Number",
    homeMobileNumber: "Home Mobile Number",
    declaration: "I declare that all information provided is correct.",
    rulesRead: "I have read and understood the rules.",
    submit: "Submit",
    cancel: "Cancel",
    helperSelectOption: "Please select one option.",
  },
  hi: {
    registrationForm: "पंजीकरण फॉर्म",
    password: "पासवर्ड बनाएं",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    name: "नाम",
    dob: "जन्म तिथि",
    email: "ईमेल",
    gender: "लिंग",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    occupation: "पेशा",
    aadharNumber: "आधार नंबर",
    fatherName: "पिता का नाम",
    address: "पता",
    district: "जिला",
    state: "राज्य",
    availingBenefits:
      "क्या आप फाउंडेशन द्वारा प्रदान किए गए लाभ प्राप्त करना चाहते हैं?",
    avail: "लाभ प्राप्त करें",
    donate: "वंचित बच्चों की शिक्षा के लिए धन दान करें",
    nominee1: "नामांकित व्यक्ति 1 का नाम",
    relationWithNominee1: "नामांकित व्यक्ति 1 से संबंध",
    nominee1Mobile: "नामांकित व्यक्ति 1 का मोबाइल",
    nominee2: "नामांकित व्यक्ति 2 का नाम",
    relationWithNominee2: "नामांकित व्यक्ति 2 से संबंध",
    nominee2Mobile: "नामांकित व्यक्ति 2 का मोबाइल",
    disease: "क्या आपको कोई बीमारी है?",
    diseaseDescription: "बीमारी का विवरण",
    mobileNumber: "मोबाइल नंबर",
    homeMobileNumber: "घर का मोबाइल नंबर",
    declaration: "मैं घोषणा करता हूँ कि दी गई सभी जानकारी सही है।",
    rulesRead: "मैंने नियम पढ़े और समझे हैं।",
    submit: "जमा करें",
    cancel: "रद्द करें",
    helperSelectOption: "कृपया एक विकल्प चुनें।",
  },
};

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
  const [language, setLanguage] = useState("en"); // 'en' or 'hi'

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "hi" : "en"));
  };

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
    // showing the data in console
    console.log("Form Data Submitted:", formData);

    // Start loading
    setIsSubmitting(true);

    try {
      // Use environment variable for API base URL
      const apiUrl = "https://bees-backend-pwv8.onrender.com/api/form";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response.body);

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
          minWidth: "7vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.default,
          py: 3,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              boxShadow: 2,
              p: 3,
              backgroundColor: "#fff",
            }}
          >
            <Button onClick={toggleLanguage} sx={{ float: "right", mb: 2 }}>
              {language === "en" ? "Switch to Hindi" : "Switch to English"}
            </Button>

            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ mb: 5 }} // Added margin-bottom
            >
            { labels[language].registrationForm}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Password Fields */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type="password"
                    label={labels[language].password}
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
                    label={labels[language].confirmPassword}
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
                    label={labels[language].name}
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
                    label={labels[language].dob}
                    InputLabelProps={{ shrink: true }}
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={labels[language].email}
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
                    label={labels[language].gender}
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    error={!!errors.gender}
                    helperText={errors.gender}
                  >
                    <MenuItem value="Male">{labels[language].male}</MenuItem>
                    <MenuItem value="Female">
                      {labels[language].female}
                    </MenuItem>
                    <MenuItem value="Other">{labels[language].other}</MenuItem>
                  </TextField>
                </Grid>

                {/* Additional Information */}
                <Grid item xs={12} md={6} lg={12}>
                  <TextField
                    fullWidth
                    label={labels[language].occupation}
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={labels[language].aadharNumber}
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
                    label={labels[language].fatherName}
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={labels[language].address}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Address Section */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={labels[language].district}
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                  <TextField
                    fullWidth
                    select
                    label={labels[language].state}
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
                    label={labels[language].availingBenefits}
                    value={formData.availingBenefits}
                    onChange={(e) => {
                      const newValue = e.target.value === "true"; // Convert string to boolean
                  
                      setFormData({
                        ...formData,
                        availingBenefits: newValue,
                      });
                    }}
                    error={!!errors.availingBenefits}
                    helperText={
                      errors.availingBenefits || 
                      labels[language].helperSelectOption
                    }
                  >
                    <MenuItem value="true">{labels[language].avail}</MenuItem>
                    <MenuItem value="false">
                    {labels[language].donate}
                    </MenuItem>
                  </TextField>
                </Grid>

                {formData.availingBenefits === true && (
                  <>
                    {/* Nominee 1 Details */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].nominee1}
                        name="nominee1"
                        value={formData.nominee1}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].relationWithNominee1}
                        name="relationWithNominee1"
                        value={formData.relationWithNominee1}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].nominee1Mobile}
                        name="nominee1Mobile"
                        value={formData.nominee1Mobile}
                        onChange={handleChange}
                      />
                    </Grid>

                    {/* Nominee 2 Details */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].nominee2}
                        name="nominee2"
                        value={formData.nominee2}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].relationWithNominee2}
                        name="relationWithNominee2"
                        value={formData.relationWithNominee2}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label={labels[language].nominee2Mobile}
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
                    label={labels[language].disease}
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={labels[language].diseaseDescription}
                    name="diseaseDescription"
                    value={formData.diseaseDescription}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={labels[language].mobileNumber}
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
                    label={labels[language].homeMobileNumber}
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
                    label={labels[language].declaration}
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
                    label={labels[language].rulesRead}
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
                    {isSubmitting ? <CircularProgress size={24} /> : labels[language].submit}
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button fullWidth variant="outlined" component={Link} to="/">
                 {labels[language].cancel}
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
