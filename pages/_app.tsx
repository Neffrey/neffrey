// IMPORT TYPES
import type { AppProps } from "next/app";

// FRAMEWORK
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// Default Styles And Fonts
import Theme from "../theme";
import "./styles.css";
import "@fontsource/roboto";
import "@fontsource/big-shoulders-display";

// CONTEXT
import UserContext from "../contexts/userProvider";
// import Apollo from '../components/apollo'
// import Auth from '../contexts/authContext'
// import Themer from '../contexts/themeContext'

// COMPONENTS
import Header from "../components/header";
import Footer from "../components/footer";
// import BodyBox from '../components/bodyBox'
// import Footer from '../components/footer'

const PtWebApp = ({ Component, pageProps }: AppProps) => {
  console.log("THEME OBJ ", Theme);
  return (
    <UserContext>
      <ChakraProvider resetCSS theme={Theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </UserContext>
  );
}

export default PtWebApp;

// OLD APP JS
// // // // //
//   return (
//     <Auth>
//       <Apollo>
//         <User>
//           <Themer>
//             <Header />
//             <BodyBox>
//               <Component {...pageProps} />
//             </BodyBox>
//             <Footer />
//           </Themer>
//         </User>
//       </Apollo>
//     </Auth>
//   )
// }
