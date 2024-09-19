import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const ProjectsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", color: "#333", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Objectives
        </Typography>
        <List sx={{ listStyleType: 'decimal', pl: 2 }}>
          {[
            "To open vocational institutes for underprivileged students.",
            "To open coaching centres for underprivileged students.",
            "To open schools and colleges for underprivileged students.",
            "To train teachers and workers in the true spirit of education and learning.",
            "To establish research and training centres for furthering education and learning in various fields.",
            "To open counselling centres for all.",
            "To work for the environment."
          ].map((objective, index) => (
            <ListItem key={index} sx={{ display: 'list-item' }}>
              <ListItemText primary={objective} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
