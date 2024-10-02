import React, { useState } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const RulesPage = () => {
  const [isHindi, setIsHindi] = useState(false);

  const handleToggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  // English Rules
  const englishRules = [
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
  ];

  // Hindi Rules
  const hindiRules = [
    "आप केवल टेलीग्राम या व्हाट्सएप समूह में शामिल होकर या पंजीकरण फॉर्म भरकर BEES फाउंडेशन के सदस्य नहीं बनेंगे। सदस्य बनने और लाभ उठाने के लिए नियमों के अनुसार योगदान आवश्यक है।",
    "कोई भी वयस्क फाउंडेशन का सदस्य बन सकता है।",
    "BEES फाउंडेशन एक NGO है जो शिक्षा के प्रचार के लिए काम करता है और समय से पहले (60 से पहले) या गंभीर दुर्घटनाओं के मामले में परिवारों (नामांकित व्यक्ति) की मदद करेगा।",
    "फाउंडेशन की मदद की क्षमता सदस्यों से योगदान पर निर्भर करती है। हैकिंग, धोखाधड़ी या योगदान की कमी के मामलों में, मदद की गारंटी नहीं दी जा सकती।",
    "एक मृत सदस्य के लिए फंड 2000 सदस्यों में एक मौत के आधार पर गणना की जाएगी। यदि एक से अधिक मौतें होती हैं, तो फंड का वितरण उसी के अनुसार किया जाएगा।",
    "एक मृत सदस्य के परिवार को दिया गया राशि निश्चित नहीं है और समय के साथ भिन्न हो सकता है।",
    "मदद प्राप्त करने के लिए, सदस्यों को दो बार योगदान देना होगा। यदि केवल एक योगदान के बाद कोई त्रासदी होती है, तो कोई मदद प्रदान नहीं की जाएगी।",
    "सदस्यों को योगदान देना जारी रखना चाहिए। वर्ष में एक बार एक बार का छूट एक लिखित कारण के साथ स्वीकार किया जाएगा।",
    "प्रत्येक महीने की 10 तारीख तक योगदान करना होगा।",
    "हर महीने योगदान का स्क्रीनशॉट भेजना होगा।",
    "यदि कोई फर्जी स्क्रीनशॉट पाया जाता है, तो सदस्यता समाप्त कर दी जाएगी।",
    "योगदान पर्चियों को भौतिक रूप से संग्रहीत किया जाना चाहिए और दावे के समय नामांकित व्यक्ति द्वारा दिखाया जाना चाहिए।",
    "आपका योगदान एक चैरिटेबल दान है और इसे वापस नहीं किया जाएगा।",
    "सदस्यों को फाउंडेशन की गतिविधियों पर अपडेट के लिए टेलीग्राम समूह से जुड़े रहना चाहिए।",
    "सदस्यता केवल गूगल फॉर्म भरने और आवश्यक योगदान करने के बाद ही पुष्टि की जाती है।",
    "आत्महत्या और हत्या के मामलों में कोई मदद नहीं दी जाएगी। हत्या के मामलों की जांच की जाएगी, और कुछ मामलों में सहायता प्रदान की जा सकती है।",
    "यदि एक से अधिक नामांकित व्यक्ति हैं, तो फाउंडेशन अपनी विवेकाधीनता पर सहायता वितरित करेगा।",
    "नामांकित व्यक्ति का आईडी, आधार और बैंक विवरण प्रदान किया जाना चाहिए।",
    "फाउंडेशन किसी को सदस्य बनने के लिए दबाव नहीं डालता है। सदस्य कभी भी छोड़ सकते हैं।",
    "फाउंडेशन का उद्देश्य सदस्यों की मदद करना और शिक्षा में काम करना है। योगदान का 15-20% शैक्षिक गतिविधियों के लिए बचाया जाएगा।",
    "नियमों में कभी भी संशोधन किया जा सकता है।"
  ];

  return (
    <Box sx={{ backgroundColor: '#e0f7fa', color: '#004d40', py: 8 }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 5, color: '#00695c' }}>
          Rules to Become a Member
        </Typography>

        {/* Language Toggle Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleLanguage}
          sx={{ marginBottom: 4 }}
        >
          {isHindi ? "See in English" : "See in Hindi"}
        </Button>

        {/* Rules List */}
        <List sx={{ pl: { xs: 2, md: 5 }, pr: { xs: 2, md: 5 }, bgcolor: '#ffffff', borderRadius: '10px', p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          {(isHindi ? hindiRules : englishRules).map((rule, index) => (
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
