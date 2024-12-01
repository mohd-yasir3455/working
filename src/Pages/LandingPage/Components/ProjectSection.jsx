import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Paper } from "@mui/material";

const ProjectsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", color: "#333", py: 6 }}>
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 3, 
            fontSize: '2rem',
            color: "#FF7043", // Orange color for the title
          }}
        >
          Objectives
        </Typography>
        <Paper 
          sx={{
            backgroundColor: "#ffffff", // White background for the list container
            padding: 3, 
            borderRadius: "8px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
            overflow: "hidden"
          }}
        >
          <List sx={{ listStyleType: 'decimal', pl: 4, paddingLeft: "20px" }}>
            {[
              "To open vocational institutes for underprivileged students.",
              "To open coaching centres for underprivileged students.",
              "To open schools and colleges for underprivileged students.",
              "To train teachers and workers in the true spirit of education and learning.",
              "To establish research and training centres for furthering education and learning in various fields.",
              "To open counselling centres for all.",
              "To work for the environment."
            ].map((objective, index) => (
              <ListItem key={index} sx={{ 
                marginBottom: "12px", 
                paddingLeft: "12px", // Additional padding for list items
                borderRadius: "4px",
                transition: "background-color 0.3s ease", 
                "&:hover": { backgroundColor: "#f1f1f1" } 
              }}>
                <ListItemText 
                  primary={
                    <Typography sx={{ fontWeight: 'bold', fontSize: "1.1rem", lineHeight: "1.6" }}>
                      {objective}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
