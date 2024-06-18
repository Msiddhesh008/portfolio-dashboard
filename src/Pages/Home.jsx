import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <Box>
      <Hero />
      <AboutMe />
      {/* <Portfolio />
      <Contact /> */}
    </Box>
  );
};

export default Home;
