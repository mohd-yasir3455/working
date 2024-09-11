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
import { useNavigate } from "react-router-dom"; // For routing based on role

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

const roles = ["User", "Admin"];

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "User", // default to "User"
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // For role-based routing

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation (you can expand this)
  const validatePassword = (password) => {
    return password.length >= 6; // Example validation
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      tempErrors.password = "Password must be at least 6 characters.";
    }

    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      // Based on role, redirect to respective dashboard
      if (formData.role === "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
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
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              p: 5,
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Email Field */}
                <Grid item xs={12}>
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

                {/* Password Field */}
                <Grid item xs={12}>
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

                {/* Role Dropdown */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Select Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 3,
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 3,
                      textTransform: "none",
                    }}
                  >
                    Login
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

export default LoginForm;
