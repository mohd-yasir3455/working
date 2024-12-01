import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import backgroundImage from "../Components/images/t3.jpg"; // Adjust the path as needed

const About = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // This makes the background appear fixed
        minHeight: '100vh',
        position: 'relative',
      }}
      className="bg-gray-50"
    >
      {/* Fade overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content Section */}
      <Container 
        maxWidth="md" 
        className="mt-12 mb-20 p-6 rounded-xl shadow-lg relative z-10"
      >
        <Box className="bg-white p-6 rounded-lg shadow-md">
          <Box className="text-center mb-8">
            <Typography 
              variant="h4" 
              component="h1" 
              className="font-bold text-6xl md:text-5xl text-orange-600 mb-4"
            >
              About BEES Foundation
            </Typography>
            <hr className="border-t-2 border-orange-400 w-20 mx-auto mb-6" />
          </Box>

          <Box className="text-justify space-y-6">
            <Typography 
              variant="body1" 
              className="text-lg text-gray-700 leading-relaxed"
            >
              BEES Foundation has been working in the area of education for the last 7 years, providing free education to underprivileged children. Along with this, the foundation is also working on environmental issues and addressing societal evils like lavish weddings.
            </Typography>

            <Typography 
              variant="body1" 
              className="text-lg text-gray-700 leading-relaxed"
            >
              The objective of BEES Foundation is to reform and promote education.
            </Typography>

            <Typography 
              variant="body1" 
              className="text-lg text-gray-700 leading-relaxed"
            >
              BEES Foundation has recently taken a new initiative in which it will help the families of members of the Foundation by providing financial support in case of their untimely death.
            </Typography>

            <Typography 
              variant="body1" 
              className="text-lg text-gray-700 leading-relaxed"
            >
              In the case of a serious accident, the member will also be assisted by the Foundation.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default About;
