import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  footerContainer,
  newsletterSection,
  footerContentContainer,
  dividerStyle,
  copyrightText,
  paymentIconsContainer,
} from '../../../styles/stylesFooter/footerStyle';

// Company info sections
const companyInfo = [
  { title: 'Company', items: ['About', 'Features', 'Works', 'Career'] },
  { title: 'Help', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
  { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  { title: 'Resources', items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
];

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      {/* Newsletter Section */}
      <Box sx={newsletterSection}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              fontWeight="700"
              fontSize={{ xs: '25px', md: '40px' }}
              lineHeight={'45px'}
              fontFamily={'Poppins'}
            >
              Subscribe to Our Newsletter
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Content */}
      <Box sx={footerContentContainer}>
        <Grid container spacing={4}>
          {/* Left Section (Logo and Description) */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Typography
              variant="h6"
              fontWeight="700"
              fontSize={{ xs: '25px', md: '33.45px' }}
              fontFamily="Poppins"
            >
              SHOP CO.
            </Typography>
            <Typography
              variant="body2"
              color="#6c757d"
              sx={{ marginTop: 3, fontWeight: 400, fontSize: '14px', lineHeight: '22px', fontFamily: 'Poppins' }}
            >
              We provide high-quality products and services to enhance your shopping experience.
            </Typography>
          </Grid>

          {/* Company Info Sections */}
          {companyInfo.map((section, index) => (
            <Grid size={{ xs: 12, sm: 2 }} key={index}>
              <Typography variant="h6" fontWeight="550" fontSize={'16px'} marginTop={2} letterSpacing="3px">
                {section.title}
              </Typography>
              {section.items.map((item, idx) => (
                <Typography
                  variant="body2"
                  color="#6c757d"
                  sx={{ marginTop: 3, fontSize: '16px', fontWeight: 400 }}
                  key={idx}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Social Media Icons with SVG */}
      <Box sx={paymentIconsContainer} display="flex" justifyContent="center" marginTop={4}>
        {/* Facebook Icon */}
        <Box sx={{ marginX: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4267B2" width="40" height="40" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.324 1.325 1.324h11.494v-9.284h-3.124v-3.622h3.124v-2.671c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.284h6.117c.733 0 1.324-.591 1.324-1.325v-21.35c0-.734-.591-1.325-1.325-1.325z" />
          </svg>
        </Box>

        {/* YouTube Icon */}
        <Box sx={{ marginX: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" width="40" height="40" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-.835-.88-2.09-1.064-6.117-1.064H6.502C2.475 2.12.12 2.301.004 3.184-0.116 4.084-0.116 6 0 7c.12.88 2.375 1.064 6.502 1.064h7.995c4.027 0 5.282-.184 6.117-1.064.116-.88.116-2.916 0-3.816zM9.75 15.163V8.837l6.75 3.163-6.75 3.163z" />
          </svg>
        </Box>

        {/* Instagram Icon */}
        <Box sx={{ marginX: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#C13584" width="40" height="40" viewBox="0 0 24 24">
            <path d="M12 2.162c3.195 0 3.57.012 4.826.07 1.183.058 2.086.25 2.594.521a4.945 4.945 0 011.81 1.81c.27.508.463 1.411.521 2.594.058 1.256.07 1.63.07 4.826s-.012 3.57-.07 4.826c-.058 1.183-.25 2.086-.521 2.594a4.945 4.945 0 01-1.81 1.81c-.508.27-1.411.463-2.594.521-1.256.058-1.63.07-4.826.07s-3.57-.012-4.826-.07c-1.183-.058-2.086-.25-2.594-.521a4.945 4.945 0 01-1.81-1.81c-.27-.508-.463-1.411-.521-2.594C2.162 12.732 2.15 12.358 2.15 12s.012-3.57.07-4.826c.058-1.183.25-2.086.521-2.594a4.945 4.945 0 011.81-1.81c.508-.27 1.411-.463 2.594-.521C8.43 2.174 8.806 2.162 12 2.162zM12 0C8.741 0 8.332.012 7.055.07 5.788.131 4.786.294 3.971.633 2.745.983 1.686 1.824.631 2.879c-1.055 1.055-1.896 2.114-2.246 3.34C-.12 7.093 0 8.746 0 12c0 3.254.12 4.907.631 6.621.35 1.226 1.191 2.285 2.246 3.34 1.055 1.055 2.114 1.896 3.34 2.246 1.138.339 2.068.58 3.213.58 3.254 0 4.907-.12 6.621-.631 1.226-.35 2.285-1.191 3.34-2.246 1.055-1.055 1.896-2.114 2.246-3.34.511-1.714.631-3.367.631-6.621s-.12-4.907-.631-6.621c-.35-1.226-1.191-2.285-2.246-3.34-1.055-1.055-2.114-1.896-3.34-2.246C15.943.12 14.96 0 12 0zm0 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.255a4.094 4.094 0 110-8.187 4.094 4.094 0 010 8.187zm6.399-10.837a1.444 1.444 0 110-2.887 1.444 1.444 0 010 2.887z" />
          </svg>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={dividerStyle} />

      {/* Copyright Section */}
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="body2" sx={copyrightText}>
          &copy; {new Date().getFullYear()} SHOP CO. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
