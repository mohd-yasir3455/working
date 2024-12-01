import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import img1 from "../Components/images/t1.jpg";
import img2 from "../Components/images/t2.jpg";
import img3 from "../Components/images/t3.jpg";
import img4 from "../Components/images/t4.jpg";
import img5 from "../Components/images/t5.jpg";
import img6 from "../Components/images/t7.jpg";
import bgImage from "../Components/images/t1.jpg"; // Background image for parallax

const Gallery = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundAttachment: 'fixed',  // Parallax effect
        height: 'auto',
      }}
    >
      <Container maxWidth="lg" className="my-12 relative z-10">
        <Typography 
          variant="h4" 
          component="h1" 
          className="font-bold text-4xl text-center text-orange-600 mb-8"
        >
          BEES Foundation Gallery
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img1} 
                alt="Gallery Image 1" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 1</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img2} 
                alt="Gallery Image 2" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 2</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img3} 
                alt="Gallery Image 3" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 3</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img4} 
                alt="Gallery Image 4" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 4</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img5} 
                alt="Gallery Image 5" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 5</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia 
                component="img" 
                image={img6} 
                alt="Gallery Image 6" 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography variant="h6" className="font-semibold text-lg text-gray-800">Image 6</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Gallery;


