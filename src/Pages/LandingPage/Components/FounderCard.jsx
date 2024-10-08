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
           SYED MOHD ANAS
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
            Founder & Visionary Teacher
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
         Syed Mohd Anas is a visionary teacher. He entered the field of education with the intention of bringing about change through education. He started his teaching journey from Delhi in 2013. In 2015, he returned to his hometown Muzaffarnagar, UP and started working for education here too while he was still a student himself. In 2016, he started teaching underprivileged children in a slum near his home. His aim of teaching is not only to impart literacy but also to make the child realize his potential and become a good human being, the kind of person that society needs very much today. In 2017, he founded the BEES Foundation, whose main objective is to promote education among the poor and reform education. Along with working at the ground level, he also works on peace and brotherhood in the society through his videos and writings. Apart from this, he is also continuously working for the environment and is working against a major evil in society- expensive marriages, on which he has also written a booklet.
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
