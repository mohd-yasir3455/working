import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import image1 from '../Components/images/t5.jpg'; // Ensure correct path
import image2 from '../Components/images/t1.jpg'; // Ensure correct path
import image3 from '../Components/images/t4.jpg'; // Add this line for the third image

const CardGroup = () => {
  // Sample card data
  const cards = [
    {
      title: 'Trees Plantation ',
      text: 'Promoting and awaring the society for a sustainable lifestyle by educating communities on the importance of protecting natural resources and reducing pollution for a healthier planet.',
      imgSrc: image1, // Directly reference the imported image
      updated: 'working from 4 year ago',
    },
    {
      title: 'Awareness on Garbage Burning',
      text: 'Spreading awareness about the harmful effects of garbage burning, advocating for proper waste disposal, and encouraging eco-friendly alternatives to protect the environment and public health',
      imgSrc: image2, // Directly reference the imported image
      updated: 'working from 5 year ',
    },
    {
      title: 'Educating Needy Students',
      text: 'Empowering underprivileged children through quality education and skill development to ensure a brighter future and equal opportunities.',
      imgSrc: image3, // Ensure this variable is defined
      updated: 'working from 7+ years ago',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: '16px' }}>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* Responsive layout */}
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Ensure equal height */}
              <CardMedia
                component="img"
                height="140"
                image={card.imgSrc} // This should now correctly reference the image
                alt={card.title}
                sx={{ objectFit: 'cover' }} // Prevents image stretching
              />
              <CardContent sx={{ flexGrow: 1 }}> {/* Allow content to grow */}
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </CardContent>
              <Typography variant="caption" color="text.secondary" sx={{ padding: '8px' }}>
                {card.updated}
              </Typography> {/* Footer for last updated time */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardGroup;
