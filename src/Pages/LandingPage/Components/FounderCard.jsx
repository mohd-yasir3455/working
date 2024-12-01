import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Container } from '@mui/material';
import img from '../Components/images/anas1.jpg'; // Update this path to your actual image file
import '@fontsource/poppins'; // Importing Poppins font

const SubscribeSection = () => {
  const theme = useTheme(); // Access the theme

  return (
    <section
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(4),
        fontFamily: 'Poppins, sans-serif', // Apply Poppins font
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: theme.spacing(4), // Adjust padding around the content
          margin: '0 auto', // Center container horizontally
          borderRadius: theme.shape.borderRadius, // Apply border radius
          boxShadow: theme.shadows[6], // Increase shadow for more depth
          // background: 'linear-gradient(135deg, #FF7E5F 0%, #FFAE8F 100%)', // Orange gradient
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          textAlign={{ xs: 'center', md: 'left' }} // Center on mobile, left on desktop
          sx={{ gap: theme.spacing(4) }} // Add space between image and text
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: '80%', sm: '60%', md: '33%' },
              height: 'auto',
              marginBottom: { xs: theme.spacing(3), md: 0 },
              borderRadius: theme.shape.borderRadius,
              overflow: 'hidden',
            }}
          >
            <img
              src={img}
              alt="Syed Mohd Anas"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
                margin: '0 auto', // Center image in mobile view
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '67%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, align left on desktop
              paddingX: { xs: theme.spacing(2), md: theme.spacing(4) },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: '700', // Bold header for better visibility
                marginBottom: theme.spacing(2),
                color: '#f57223', // Dark text color for better contrast
                textAlign: { xs: 'center', md: 'left' }, // Center on mobile
                fontFamily: 'Poppins, sans-serif', // Poppins font for header
              }}
            >
              SYED MOHD ANAS
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: 1.8,
                color: '#333', // Darken text color for readability
                textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
                fontFamily: 'Poppins, sans-serif', // Poppins font for body text
              }}
            >
              Syed Mohd Anas is a visionary teacher. He entered the field of education with the intention of bringing about change through education. He started his teaching journey from Delhi in 2013. In 2015, he returned to his hometown Muzaffarnagar, UP and started working for education here too while he was still a student himself. In 2016, he started teaching underprivileged children in a slum near his home. His aim of teaching is not only to impart literacy but also to make the child realize his potential and become a good human being, the kind of person that society needs very much today. In 2017, he founded the BEES Foundation, whose main objective is to promote education among the poor and reform education. Along with working at the ground level, he also works on peace and brotherhood in the society through his videos and writings. Apart from this, he is also continuously working for the environment and is working against a major evil in society—expensive marriages, on which he has also written a book.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SubscribeSection;
