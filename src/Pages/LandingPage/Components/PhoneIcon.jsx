// src/components/PhoneIcon.jsx
import React from "react";
import { IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneFloatingButton = () => {
  return (
    <IconButton
      href="tel:+917037358787" // Replace with your phone number
      sx={{
        position: "fixed",
        bottom: 80, // Adjusted to be above the WhatsApp icon
        right: 20,
        backgroundColor: "#0A74DA", // Blue color for phone icon
        color: "#fff",
        "&:hover": {
          backgroundColor: "#005BB5", // Darker blue on hover
        },
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
      aria-label="Call us"
    >
      <PhoneIcon fontSize="large" />
    </IconButton>
  );
};

export default PhoneFloatingButton;
