import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import backgroundImage from "../Components/images/t3.jpg"; // Adjust the path as needed

const About = () => {
  const [isHindi, setIsHindi] = useState(false); // State to toggle between languages

  // Content in both languages
  const content = {
    english: [
      "BEES Foundation has been working in the area of education for the last 7 years, providing free education to underprivileged children. Along with this, the foundation is also working on environmental issues and addressing societal evils like lavish weddings.",
      "The objective of BEES Foundation is to reform and promote education.",
      "BEES Foundation has recently taken a new initiative in which it will help the families of members of the Foundation by providing financial support in case of their untimely death.",
      "In the case of a serious accident, the member will also be assisted by the Foundation.",
    ],
    hindi: [
      "BEES Foundation पिछले 7 वर्षों से शिक्षा के क्षेत्र में काम कर रही है, जिसमें वंचित बच्चों को निःशुल्क शिक्षा प्रदान की जाती है।",
      " इसके साथ ही Foundation पर्यावरण और समाज की कुरीतियों जैसे महंगी शादी पर भी काम कर रही है।",

      "BEES Foundation का उद्देश्य शिक्षा में सुधार और उसे बढ़ावा देना है।",

      "आज शिक्षा केवल रोज़गार तक ही सीमित रह गई है। हमारा उद्देश्य शिक्षा के माध्यम से ऐसे व्यक्ति का निर्माण करना है जो समाज और देश के लिए कुछ अच्छा कर सके। अगर वह डॉक्टर हो तो वो सही मानों में डॉक्टर हों जो पैसा कमाने से पहले मरीज़ की सेवा करने की इच्छा रखते हो।",

      "BEES Foundation ने हाल ही में एक नई पहल की है, जिसमें वह Foundation के सदस्यों की असामयिक मृत्यु होने पर उनके परिवारों को अच्छी रकम देकर उनकी मदद करेगी।",

      "साथ ही गंभीर दुर्घटना होने पर भी सदस्य की मदद की जाएगी।",
    ],
  };

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        position: "relative",
      }}
      className="bg-gray-50"
    >
      {/* Fade overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Content Section */}
      <Container
        maxWidth="md"
        className="mt-12 mb-20 p-6 rounded-xl shadow-lg relative z-10"
      >
        <Box className="bg-white p-6 rounded-lg shadow-md">
          <Box className="text-center mb-8">
            <Typography
              variant="h4"
              component="h1"
              className="font-bold text-6xl md:text-5xl text-orange-600 mb-4"
            >
              {isHindi
                ? "बीईईएस फाउंडेशन के बारे में"
                : "About BEES Foundation"}
            </Typography>
            <hr className="border-t-2 border-orange-400 w-20 mx-auto mb-6" />
          </Box>

          <Box className="text-justify space-y-6">
            {content[isHindi ? "hindi" : "english"].map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                className="text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          {/* Toggle Button */}
          <Box className="text-center mt-6">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsHindi(!isHindi)}
            >
              {isHindi ? "Switch to English" : "हिंदी में बदलें"}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default About;
