// FRAMEWORK
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Heading } from "@chakra-ui/react";

// CONTEXTS
import { UserContext } from "../../contexts/userProvider";

// Component Function
const HeaderAccountUser = () => {
  // Context
  const { loginUser, logoutUser, userErrorMsg, userId, userName } =
    useContext(UserContext);
  return (
    <Box my="auto">
      <Center>
        <Link href="/account" passHref>
          <Heading as="h5" cursor="pointer" fontSize="xs" fontWeight="semibold">
            {userName + "'s Account"}
          </Heading>
        </Link>
        <Link href="/account" passHref>
          <Avatar size="sm" mx={2} cursor="pointer" />
        </Link>
      </Center>
    </Box>
  );
};
export default HeaderAccountUser;
