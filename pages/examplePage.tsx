// FRAMEWORK
import React, { useContext } from "react";
import Head from "next/head";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

// TYPES
import type { NextPage } from "next";

// COMPONENTS
import ExamplePageLayout from "../components/examplePageLayout";

// CONTEXTS
import { UserContext } from "../contexts/userProvider";

// PAGE COMPONENT
const ExamplePage: NextPage = () => {
  // Context
  const { loginUser, logoutUser, userErrorMsg, userId, userName } =
    useContext(UserContext);

  return (
    <ExamplePageLayout />
  );
};
export default ExamplePage;
