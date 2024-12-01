// src/components/FAQSection.jsx
import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        padding: "60px 0",
        minHeight: "100vh",
        color: "#333"
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#f57223",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            marginBottom: "40px"
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "15px",
              borderRadius: "8px"
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1565c0" }} />}
              sx={{
                backgroundColor: "#fefefe",
                "&:hover": { backgroundColor: "#e3f2fd" },
                fontWeight: "bold",
                color: "#333"
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#fefefe", padding: "20px" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

// FAQ data array
const faqData = [
  {
    question: "What is BEES Foundation?",
    answer: "BEES Foundation is an NGO working for the reformation and promotion of education. The Foundation provides free education to underprivileged children, which includes classes for younger children and coding classes for 10th pass children. The Foundation is also working for the environment and is also working against a major evil in society - expensive weddings."
  },
  {
    question: "What is the Self-Help Group (SHG)?",
    answer: "BEES Foundation has formed a Self-Help Group in which a contribution of Rs. 300 per month is being taken. If a member meets with a serious accident, the foundation will help him, and if he dies before the age of 60, a good amount will be given to the member's nominee/nominees."
  },
  {
    question: "Where is the head office of the BEES Foundation?",
    answer: "Muzaffarnagar, U.P."
  },
  {
    question: "Will the Foundation open centres in Muzaffarnagar only?",
    answer: "No, the Foundation is authorized to work all over India. A center will be opened in the city or town where we have enough members."
  },
  {
    question: "What kind of centres will be opened?",
    answer: "Underprivileged children will be provided with English speaking and coding courses for free."
  },
  {
    question: "Will the courses be provided free to the children of members also?",
    answer: "The English speaking course will be free for the children of the members. If the monthly income of the member is less than Rs. 15000 then the coding class will also be free for his children. If the member does not fall in this category then he will be given a special discount."
  },
  {
    question: "How can I become a member of the BEES Foundation?",
    answer: "You have to fill the registration form and contribute Rs. 300 every month."
  },
  {
    question: "Can anyone become a member of the BEES Foundation?",
    answer: "Any adult can become a member of the Foundation."
  },
  {
    question: "What will happen if I miss a contribution?",
    answer: "To get help from the Foundation, you will have to make regular contributions. There is a one-time exemption in a year but you will have to give the reason for it in writing."
  },
  {
    question: "What assistance does the Foundation provide in case of an accident?",
    answer: "In case of a serious accident, assistance ranging from Rs. 5,000 to Rs 50,000 will be provided."
  },
  {
    question: "What assistance does the Foundation provide in case of death?",
    answer: "This depends on the number of members. If there are 2000 members, assistance of up to Rs 500,000 will be provided. As the number of members increases, the assistance will also increase."
  },
  {
    question: "Is there a fixed amount provided to the nominee?",
    answer: "No, it depends on the number of members."
  },
  {
    question: "What happens if a member commits suicide or is murdered?",
    answer: "No help will be given in case of suicide. In case of murder, the case will be investigated. Help can be given in some cases. Read the rules to know in detail."
  },
  {
    question: "How many contributions are needed to be eligible for assistance?",
    answer: "Two"
  },
  {
    question: "How do I submit proof of my contribution?",
    answer: "You have to make the contribution through online apps. You have to send us the screenshot of the contribution. We will give you the receipt of the contribution which you have to show while taking help."
  },
  {
    question: "Will I get a refund for my contributions?",
    answer: "No, the money you are giving to the foundation is a donation and it is either being used to help someone or for education."
  },
  {
    question: "What documents does the nominee need to claim assistance?",
    answer: "In case of an accident, the member will have to show the donation receipt. And in case of death, the money will be given to the person whom the member had nominated. The nominee or nominees will have to provide their ID and a record of the donation receipt."
  }
];

export default FAQSection;
