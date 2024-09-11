import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Custom arrow components for better styling
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    sx={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.5)',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
    }}
    onClick={onClick}
  >
    <ArrowBackIos />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    sx={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.5)',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
    }}
    onClick={onClick}
  >
    <ArrowForwardIos />
  </IconButton>
);

const Crousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Slide 1 Caption',
    },
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Slide 2 Caption',
    },
    {
      src: 'https://via.placeholder.com/1200x600',
      caption: 'Slide 3 Caption',
    },
  ];

  return (
    <Box sx={{
      width: '100%',
      position: 'relative',
      overflow: 'hidden', // Hide overflow
      '& .slick-slide img': {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      '& .slick-dots': {
        bottom: '10px', // Position dots closer to the bottom
      },
    }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{
            position: 'relative',
            height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, // Responsive heights
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Ensure content fits within the slide
          }}>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '10px',
                borderRadius: '4px',
                textAlign: 'center',
                maxWidth: '90%', // Ensure the text doesn't exceed the width of the image
                boxSizing: 'border-box',
              }}
            >
              {slide.caption}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Crousal;
