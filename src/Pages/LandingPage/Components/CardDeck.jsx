import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import image1 from '../Components/images/crousal1.jpg'; // Ensure correct path
import image2 from '../Components/images/crousal2.jpg'; // Ensure correct path
import image3 from '../Components/images/crousal1.jpg'; // Add this line for the third image

const CardGroup = () => {
  // Sample card data
  const cards = [
    {
      title: 'Card Title 1',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgSrc: image1, // Directly reference the imported image
      updated: 'Last updated 3 mins ago',
    },
    {
      title: 'Card Title 2',
      text: 'This card has supporting text below as a natural lead-in to additional content.',
      imgSrc: image2, // Directly reference the imported image
      updated: 'Last updated 3 mins ago',
    },
    {
      title: 'Card Title 3',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      imgSrc: image3, // Ensure this variable is defined
      updated: 'Last updated 3 mins ago',
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
