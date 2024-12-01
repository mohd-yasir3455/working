// src/components/MiniFAQ.jsx
import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img from "../Components/images/crousal1.jpg"; // Import the image

const MiniFAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Sample limited FAQs for the homepage
  const faqs = [
    {
      id: "panel1",
      question: "What is BEES Foundation?",
      answer: "BEES Foundation is an NGO focused on reforming society through educational and social welfare initiatives. We provide free education to underprivileged children and work towards environment conservation.",
    },
    {
      id: "panel2",
      question: "Where is the head office of the BEES Foundation?",
      answer: "Our head office is located in Muzaffarnagar, U.P, India.",
    },
    {
      id: "panel3",
      question: "How can I become a member of the BEES Foundation?",
      answer: "You have to fill the registration form and contribute Rs. 300 every month to become a member of the BEES Foundation.",
    },
  ];

  return (
    <Box
      sx={{
        padding: "40px", // Increase padding for more space inside the container
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0)",
        margin: "30px 0", // Increased margin to add space around the FAQ section
        border: "1px solid #e0e0e0", // Border around the FAQ section
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          textAlign: "center", 
          fontWeight: "bold", 
          color: "#FF7043", // Orange color for the heading
          marginBottom: "30px" 
        }}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          sx={{
            marginBottom: "20px", // Adjusted bottom margin between FAQ items
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0)",
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: "#1565c0" }} />}
            sx={{
              backgroundColor: "#fefefe",
              "&:hover": { backgroundColor: "#e3f2fd" },
              fontWeight: "bold",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fefefe", padding: "15px" }}>
            <Typography sx={{ color: "#555" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Button to navigate to the full FAQ page */}
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          component={Link}
          to="/faq" // Adjust the path to your full FAQ page route
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#FF7043", // Orange color for button
            "&:hover": {
              backgroundColor: "#e64a19", // Darker shade of orange on hover
            },
            padding: "10px 30px", // Add padding to the button for better visibility
          }}
        >
          View All FAQs
        </Button>
      </Box>
    </Box>
  );
};

export default MiniFAQ;
