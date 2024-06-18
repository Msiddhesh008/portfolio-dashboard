import { Box, Image, Link, Text } from "@chakra-ui/react";
import bg from "../assets/bg-withoutbg.png";
import { NavLink, Route, Routes } from "react-router-dom";
import { RoutLink } from "../RoutLink";
import AboutMe from "../Components/AboutMe";
import CommingSoon from "../Components/CommingSoon";

const nav = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Me",
    path: "/about-me",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];




const DefaultLayout = () => {
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
        <Box h="35%" w="100%" bgColor="#BDBDBD">
          <Image
            w="100%"
            h="100%"
            src={bg}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            filter="grayscale(100%)"
            objectFit={"cover"}
          />
        </Box>

        <Box
          h="100%"
          w="100%"
          position="relative"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            position="absolute"
            top="12%"
            bottom="12%"
            left="50%"
            transform="translateX(-50%)"
            borderLeft="2px dotted black"
          >
            <span
              style={{
                height: 5,
                width: 5,
                background: "#000",
                position: "absolute",
                top: -2,
                left: "-3.4px",
              }}
            />

            <span
              style={{
                height: 5,
                width: 5,
                background: "#000",
                position: "absolute",
                bottom: -2,
                left: "-3.2px",
              }}
            />
          </Box>

          <Box display={"flex"} gap={8} flexDirection={"column"}>
            {nav?.map(({ title, path }, index) => (
              <NavLink
              to={path}
                key={index}


                style={{
                    textAlign:"center",
                    textTransform:"uppercase",
                    fontWeight:"bold",
                    backgroundColor:"#ffba31",
                    zIndex:1,
                    padding:"10px",
                }}
              >
                {title}
              </NavLink>
            ))}
          </Box>
        </Box>
      </Box>

      <AppContent/>
    </Box>
  );
};

export default DefaultLayout;


const AppContent = () => {
    return (
      <Routes>
        {RoutLink.map(({ Component, path }, index) => (
          <Route key={index} path={path} element={<Component/>} />
        ))}
        <Route path="*" element={<CommingSoon />} />
      </Routes>
    );
  };
