import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Modal, Box } from '@mui/material';

const VideoCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const videoId = 'Yr6SKJB5PLc'; // Extracted from the YouTube link

  return (
    <>
      {/* Card for displaying the thumbnail */}
      <Card style={{ maxWidth: 345, margin: 'auto', cursor: 'pointer' }} onClick={handleOpen}>
        <CardMedia
          component="img"
          alt="YouTube Video Thumbnail"
          height="140"
          image={`https://img.youtube.com/vi/${videoId}/0.jpg`} // Fetch thumbnail from YouTube
          title="YouTube Video"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Introduction to BEES Foundation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click to watch the video.
          </Typography>
        </CardContent>
      </Card>

      {/* Modal for the actual video */}
      <Modal open={open} onClose={handleClose} aria-labelledby="youtube-video" aria-describedby="watch-video">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            boxShadow: 24,
            p: 4,
            backgroundColor: 'white',
          }}
        >
          <iframe
            style={{ width: '100%', height: '400px' }}
            src={`https://www.youtube.com/embed/${videoId}`} // Embed YouTube video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default VideoCard;
