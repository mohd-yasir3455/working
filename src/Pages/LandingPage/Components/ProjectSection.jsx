import React, { useState } from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Paper, Button } from "@mui/material";

const ProjectsSection = () => {
  const [isHindi, setIsHindi] = useState(false); // State to toggle between languages

  // Objectives in both languages
  const objectives = {
    english: [
"1. To open vocational institutes for underprivileged students.", "2. To open libraries and coaching centres for underprivileged students.", "3. To open schools and colleges for underprivileged students.", "4. To train teachers and workers in ideals and practice of the true spirit of education and learning.", "5. To establish research and training centres for the furtherance of education/learning in its various fields and branches.",   "6. To open counselling centres for all.", "7. To work for environment and health."   

    ],
    hindi: [
  "1. वंचित छात्रों के लिए व्यावसायिक संस्थान खोलना।", "2. वंचित छात्रों के लिए पुस्तकालय और कोचिंग सेंटर खोलना।", "3. वंचित छात्रों के लिए स्कूल और कॉलेज खोलना।", "4. शिक्षकों और कर्मचारियों को शिक्षा और सीखने की सच्ची भावना के आदर्शों और व्यवहार में प्रशिक्षित करना।", "5. विभिन्न क्षेत्रों और शाखाओं में Education/Learning को आगे बढ़ाने के लिए Research और Training Centres स्थापित करना।", "6. सभी के लिए Counselling Centres खोलना।", "7. पर्यावरण और स्वास्थ्य के लिए काम करना।"
    ]
  };

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
          {isHindi ? "उद्देश्य" : "Objectives"}
        </Typography>
              {/* Toggle Button */}
              <Box textAlign="center" mt={4}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setIsHindi(!isHindi)}
          >
            {isHindi ? "Switch to English" : "हिंदी में बदलें"}
          </Button>
        </Box>
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
            {objectives[isHindi ? "hindi" : "english"].map((objective, index) => (
              <ListItem key={index} sx={{ 
                marginBottom: "12px", 
                paddingLeft: "12px", 
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
