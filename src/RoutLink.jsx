
import AboutMe from "./Components/AboutMe";
import CommingSoon from "./Components/CommingSoon";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export const RoutLink = [
    {
        path: "/",
        Component: CommingSoon
    },
    {
        path: "/portfolio",
        Component: Portfolio
    },
    {
        path: "/about-me",
        Component: AboutMe
    },
    {
        path: "/contact",
        Component: Contact
    },
];
