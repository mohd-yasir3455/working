import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Box } from "@mui/material";
import backgroundImage from "../Components/images/t2.jpg"; // Adjust the path as needed

const AboutSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
      className="bg-gray-50"
    >
      {/* Fade overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>

      <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
        <div className="mx-auto max-w-5xl text-center p-8 rounded-xl shadow-lg border border-gray-300 bg-white bg-opacity-80 backdrop-blur-md">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-orange-600">
            ABOUT US
          </h1>

          <p className="mt-4 md:text-xl text-gray-700">
            BEES Foundation has been working in the field of education for the last 7 years, providing free education to underprivileged children. In addition, the foundation is also addressing environmental issues and social evils such as lavish weddings. 
            The mission of BEES Foundation is to reform and promote education. 
            Recently, the foundation introduced a new initiative to support the families of its members by providing financial assistance in the event of their untimely death. In the case of a serious accident, members will also receive aid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
