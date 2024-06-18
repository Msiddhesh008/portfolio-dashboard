import { Box, Image } from "@chakra-ui/react";
import bg from "../assets/bg-withoutbg.png";

const AboutMe = () => {
  return (
    <Box h="100vh" w="100%" display="flex">
      <Box
        h="100%"
        w="20%"
        display="flex"
        alignItems="start"
        justifyContent="start"
        flexDirection="column"
        color="#0D0D0D"
        bg="primeyellow.500"
      >
        <Box h="30%" w="100%" bgColor="#BDBDBD">
          <Image
            w="100%"
            h="100%"
            src={bg}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            filter="grayscale(100%)"
          />
        </Box>

        <Box  h="100%" w="100%" position="relative">
          <Box
            position="absolute"
            top="12%"
            bottom="12%"
            left="50%"
            transform="translateX(-50%)"
            borderLeft="2px dotted black"
          />
        </Box>
      </Box>

      <Box h="100%" w="80%" bgColor="#bdbdbd75"></Box>
    </Box>
  );
};

export default AboutMe;
