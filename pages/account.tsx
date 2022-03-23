// FRAMEWORK
import React, { useContext } from "react";
import Head from "next/head";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";

// CONTEXTS
import { UserContext } from "../contexts/userProvider";

// PAGE COMPONENT
const Account: NextPage = () => {
  // Context
  const { loginUser, logoutUser, userErrorMsg, userId, userName } =
    useContext(UserContext);

  return (
    <Flex flexWrap="wrap">
      <Heading
        as="h3"
        m={4}
        // textAlign="center"
        // w="100%"
      >
        {userId ? `Henlo ${userName}!` : "No Account"}
      </Heading>
      <Center>
        <Button
          m={4}
          onClick={() => {
            userId ? logoutUser() : loginUser();
          }}
        >
          {userId ? "Logout" : "Login"}
        </Button>
      </Center>
    </Flex>
  );
};
export default Account;
