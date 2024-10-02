// src/components/FAQSection.jsx
import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4", 
        padding: "60px 0",
        minHeight: "100vh",
        backgroundImage: "url('/path/to/your/background-image.jpg')", // Optionally add a background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#333"
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            textAlign: "center", 
            fontWeight: "bold", 
            color: "#1565c0", // Custom color
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)", // Subtle shadow for effect
            marginBottom: "40px" 
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ 1 */}
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: "#1565c0" }} />}
            sx={{
              backgroundColor: "#fefefe",
              "&:hover": { backgroundColor: "#e3f2fd" },
              fontWeight: "bold",
              color: "#333"
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              What is BEES Foundation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fefefe", padding: "20px" }}>
            <Typography sx={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
              BEES Foundation is an NGO focused on reforming society through educational and social welfare initiatives. 
              We have been active since 2017, supporting various community projects and empowering individuals through education.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 2 */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: "#1565c0" }} />}
            sx={{
              backgroundColor: "#fefefe",
              "&:hover": { backgroundColor: "#e3f2fd" },
              fontWeight: "bold",
              color: "#333"
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              How can I volunteer with BEES Foundation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fefefe", padding: "20px" }}>
            <Typography sx={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
              You can contact us via email at <strong>beesfeedback@gmail.com</strong> or call us at <strong>70-3735-8787</strong> to inquire 
              about volunteering opportunities. We welcome individuals from all walks of life to join our mission.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 3 */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: "#1565c0" }} />}
            sx={{
              backgroundColor: "#fefefe",
              "&:hover": { backgroundColor: "#e3f2fd" },
              fontWeight: "bold",
              color: "#333"
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Where is BEES Foundation located?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fefefe", padding: "20px" }}>
            <Typography sx={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
              Our office is located at <strong>853/4, Amba Vihar, Muzaffarnagar, U.P, India</strong>. Feel free to drop by for any inquiries 
              or if you're interested in learning more about our work.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQSection;
