import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const about = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 20 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
          About BEES Foundation
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'justify' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          BEES Foundation is working in the area of education for the last 7 years, providing free education to underprivileged children. Along with this, the foundation is also working on environmental issues and addressing societal evils like lavish weddings.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          The objective of BEES Foundation is to reform and promote education.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          BEES Foundation has recently taken a new initiative in which it will help the families of members of the Foundation by providing financial support in case of their untimely death.
        </Typography>

        <Typography variant="body1">
          In the case of a serious accident, the member will also be assisted by the Foundation.
        </Typography>
      </Box>
    </Container>
  );
};

export default about;
