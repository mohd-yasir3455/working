import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const RulesPage = () => {
  return (
    <Box sx={{ backgroundColor: '#e0f7fa', color: '#004d40', py: 8 }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 5, color: '#00695c' }}>
          Rules to Become a Member
        </Typography>
        
        {/* Rules List */}
        <List sx={{ pl: { xs: 2, md: 5 }, pr: { xs: 2, md: 5 }, bgcolor: '#ffffff', borderRadius: '10px', p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          {[
            "You will not become a member of BEES Foundation just by joining the Telegram or WhatsApp group or by filling the registration form. Contribution according to the rules is required to become a member and avail benefits.",
            "Any adult can become a member of the Foundation.",
            "BEES Foundation is an NGO working for the promotion of education and will help families (nominees) in case of an untimely death (before 60) or severe accidents.",
            "The Foundation’s ability to help depends on contributions from members. In cases of hacking, fraud, or lack of contributions, help may not be guaranteed.",
            "The fund for a deceased member will be calculated based on one death per 2000 members. If there are multiple deaths, the funds will be distributed accordingly.",
            "The amount given to a deceased member's family is not fixed and can vary over time.",
            "To receive help, members must contribute twice. If a tragedy occurs after only one contribution, no help will be provided.",
            "Members must continue contributing. A one-time exemption per year is allowed with a written reason.",
            "Contributions must be made by the 10th of every month.",
            "A screenshot of the contribution must be sent every month.",
            "If a fake screenshot is found, membership will be terminated.",
            "Contribution slips must be stored physically and shown by the nominee during a claim.",
            "Your contribution is a charitable donation and will not be refunded.",
            "Members must remain connected to the Telegram group for updates on foundation activities.",
            "Membership is confirmed only after filling out the Google form and making the required contributions.",
            "No help will be provided in cases of suicide and murder. Murder cases will be investigated, and assistance may be provided in some cases.",
            "If there are multiple nominees, the Foundation will distribute aid at its discretion.",
            "Nominee ID, Aadhaar, and bank details must be provided.",
            "The Foundation does not pressure anyone to become a member. Members can leave at any time.",
            "The Foundation aims to help members and work in education. 15-20% of the contributions will be saved for educational activities.",
            "The rules can be amended at any time."
          ].map((rule, index) => (
            <ListItem key={index} sx={{ mb: 2 }}>
              <ListItemText primary={`${index + 1}. ${rule}`} sx={{ fontSize: { xs: '16px', md: '18px' }, color: '#004d40' }} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default RulesPage;
