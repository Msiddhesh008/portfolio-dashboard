// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    customPink: {
      50: '#ffe5e9',
      100: '#ffbcc9',
      200: '#ff93a8',
      300: '#ff6a87',
      400: '#ff4166',
      500: '#ff1845', // you can choose your custom color values here
      600: '#db1139',
      700: '#b70d2d',
      800: '#930921',
      900: '#700616',
    },
    peach: {
        50: '#ffe6e9',
        100: '#f8c2c7',
        200: '#ef9da4',
        300: '#e67882',
        400: '#dd5460',
        500: '#DE858E', // primary shade for your custom color
        600: '#DE858E',
        700: '#DE858E',
        800: '#DE858E',
        900: '#DE858E',
      },
      primeyellow: {
        50: '#fff6e5',
        100: '#ffedcc',
        200: '#ffe3b2',
        300: '#ffda99',
        400: '#ffd080',
        500: '#FFBA31', // primary shade for your custom color
        600: '#e6a82d',
        700: '#cc9528',
        800: '#b38224',
        900: '#996f1f',
      }
  
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: 'peach.500', // using your custom color here
          },
        },
      },
    },
  },
});

export default customTheme;
