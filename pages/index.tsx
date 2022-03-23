// FRAMEWORK
import React from "react";
import Head from "next/head";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";


// PAGE FUNCTION
const Home: NextPage = () => {
  return (
    <Box w="100%">
      <Head>
        <title>Prop Tricks: Movement Database</title>
      </Head>
      <main>
        <Flex bg="teal.500" flexDir="column" minH="75vh">
          <Center my="auto">
            <Heading as="h1" size="2xl">
              HOME PAGE
            </Heading>
          </Center>
          {/*
            <TricksContainer />
          
          <Link href="/login" passHref >
            <Heading size='2xl'>
              <a>Login Page</a>
            </Heading>
          </Link>
          */}
        </Flex>
      </main>
    </Box>
  );
};

export default Home;

// // Page Function
// const home = () => {
//   // Render
//   return (
//     <Container maxWidth="md">
//       <Head>
//         <title>Prop Tricks: Movement Database</title>
//       </Head>

//       <main>
//         <h1
//           style={{
//             textAlign: 'center',
//             fontSize:'3em',
//             margin:'40px'
//           }}
//         >
//           Welcome to Prop Tricks
//         </h1>
//         <br />
//         <TricksContainer />
//         <br />
//         <Link href="login" passHref >
//           <h6>
//             <a>Login Page</a>
//           </h6>
//         </Link>
//       </main>
//     </Container>
//   )
// }
