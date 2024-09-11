// src/components/ProjectsSection.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const ProjectsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", color: "#333", padding: "50px 0" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Our Projects
        </Typography>
        <Typography variant="body1" paragraph>
          We run several projects including providing education to underprivileged children, supporting healthcare,
          and promoting environmental sustainability.
        </Typography>
      </Container>
    </Box>
  );
};

export default ProjectsSection;