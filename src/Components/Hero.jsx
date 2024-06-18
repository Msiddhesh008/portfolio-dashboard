import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg-withoutbg.png";

const Hero = () => {
  return (
    <Box h={"100vh"} w={"100%"} display={"flex"}>
      <Box
        h={"100%"}
        w={"50%"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        flexDirection={"column"}
        color={"#0D0D0D"}
        p={24}
        pe={10}
      >
        <Text fontSize="2xl" fontWeight="bold">
          HI THERE!
        </Text>
        <Box display={"flex"} alignItems={"center"}>
          <Text fontSize="6xl" fontWeight="bold" color={"black"}>
            I'M
          </Text>
          <Text
            style={{
              WebkitTextStroke: "1px #FFBA31", // Use camelCase for CSS properties in JSX
              WebkitTextFillColor: "#fff",
            }}
            fontSize="6xl"
            fontWeight="bold"
            color={"orange.400"}
            ml={2}
            textTransform={"uppercase"}
          >
            Siddhesh
          </Text>
        </Box>
        <Text
          mt={1}
          mb={6}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          fontSize="sm"
          p={2}
          pt={0}
          pb={0}
          as={"span"}
          bg={"#FFBA31"}
          color={"#0D0D0D"}
        >
          Frontend Developer / React Js
        </Text>
        <Text as={"p"} fontSize="sm" fontWeight="medium" color={"gray.600"}>
          I am an experienced React js developer with a strong background in
          building dynamic and responsive web applications. With a keen eye for
          detail and a passion for continuous learning, I strive to deliver
          high-quality code and exceptional user experiences. Let's build
          something amazing together!
        </Text>
        <Button
        mt={6}
          fontSize={"md"}
          textTransform={"uppercase"}
          rounded={"full"}
          colorScheme="primeyellow"
          fontWeight={'bold'}
        >
          More about me
        </Button>
      </Box>

      <Box
        h={"100%"}
        w={"50%"}
        bgColor={"#BDBDBD"}
      >
        <Image 
        w={'100%'}
        h={'100%'}
        backgroundImage={bg}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        filter="grayscale(100%)"/>
      </Box>
    </Box>
  );
};

export default Hero;
