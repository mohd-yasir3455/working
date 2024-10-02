import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import founderImage from '../Components/images/anas.jpg'; // Replace with the actual path to your image

const FounderCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: 1,
        boxSizing: 'border-box',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          backgroundColor: '#f4f4f9',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            flex: { xs: '0 1 auto', sm: '0 1 40%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: { xs: 'auto', sm: '100%' },
          }}
        >
          <img
            src={founderImage}
            alt="Founder"
            style={{
              width: '100%',
              height: 'auto', // Maintain aspect ratio by setting height to auto
              objectFit: 'contain', // Ensure the entire image fits inside the container without cropping
              objectPosition: 'center', // Center the image within its container
            }}
          />
        </Box>

        {/* Text Container */}
        <CardContent
          sx={{
            flex: { xs: '0 1 auto', sm: '0 1 60%' },
            padding: { xs: 2, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: '1.5rem',
              color: '#1e3a61',
              marginBottom: 2,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            John Doe
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: '1rem',
              color: '#7b8a8b',
              marginBottom: 1,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Founder & Visionary Leader
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '0.875rem',
              color: '#333',
              lineHeight: 1.6,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            John Doe began his journey in the tech industry in 1995, fueled by his passion for innovation and change. Over the years, he founded several successful startups and led teams to achieve remarkable milestones. His vision for the future is to create a company that drives positive change through cutting-edge technology and deep-rooted values of integrity and excellence.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '0.875rem',
              color: '#333',
              lineHeight: 1.6,
              marginTop: 2,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            "Our mission is to harness the power of technology to make the world a better place, one innovation at a time."
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FounderCard;
