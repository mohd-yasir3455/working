// src/components/WhatsAppIcon.jsx
import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppFloatingButton = () => {
  return (
    <IconButton
      href="https://wa.me/+917037358787" // Replace with your phone number
      target="_blank"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#25D366", // WhatsApp's green color
        color: "#fff",
        "&:hover": {
          backgroundColor: "#128C7E", // WhatsApp's darker green on hover
        },
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon fontSize="large" />
    </IconButton>
  );
};

export default WhatsAppFloatingButton;
