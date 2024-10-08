import React, { useState } from 'react';
import { Box,  Dialog, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2'
import CloseIcon from '@mui/icons-material/Close';
import image1 from '../Components/images/anas.jpg';
import image2 from '../Components/images/anas1.jpg';
import image3 from '../Components/images/anas.jpg';
import image4 from '../Components/images/anas.jpg';
import image5 from '../Components/images/anas.jpg';
import image6 from '../Components/images/anas.jpg';

// Array of images and captions
const images = [
  { src: image1, caption: 'Nature Beauty' },
  { src: image2, caption: 'City Life' },
  { src: image3, caption: 'Abstract Art' },
  { src: image4, caption: 'Mountain Adventures' },
  { src: image5, caption: 'Calm Waters' },
  { src: image6, caption: 'Wilderness' },
];

const CreativeGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: 'auto' }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: 3,
                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
              }}
              onClick={() => handleClickOpen(image)}
            >
              <Box
                component="img"
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
              {/* Overlay on Hover */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {image.caption}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={selectedImage?.src}
          alt="Selected"
          sx={{ width: '100%', height: 'auto' }}
        />
        <Typography variant="h6" sx={{ textAlign: 'center', padding: 2 }}>
          {selectedImage?.caption}
        </Typography>
      </Dialog>
    </Box>
  );
};

export default CreativeGallery;
