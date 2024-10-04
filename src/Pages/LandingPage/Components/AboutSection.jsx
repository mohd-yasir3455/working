import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Box } from "@mui/material";

const AboutSection = () => {
  const theme = useTheme(); // Access the theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Apply theme's breakpoint

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        padding: isSmallScreen ? "30px 0" : "50px 0",
        textAlign: isSmallScreen ? "center" : "left",
      }}
    >
      <Container>
        <Typography variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
      
        BEES Foundation is working in the area of education for last 7 years in which it provides free education to
underprivileged children. Along with this, the Foundation is also working on environment and evils of society
like levish wedding.
The objective of BEES Foundation is to reform and promote education.
Today, education is limited to employment only. Our aim is to create such a person through education who can
do something good for the society and the country. If he is a doctor then he must be a true doctor who has the
desire to serve the patient before earning money.
BEES Foundation has recently taken a new initiative in which it will help the families of members of the
Foundation by giving them a good amount of money in case of their untimely death.
And in case of a serious accident the member will also be helped.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
