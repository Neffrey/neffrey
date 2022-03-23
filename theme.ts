import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  // brand: {
  //   900: '#1a365d',
  //   800: '#153e75',
  //   700: '#2a69ac',
  // }
  colors: {},
  fonts: {},
  fontSizes: {},
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})

export default theme