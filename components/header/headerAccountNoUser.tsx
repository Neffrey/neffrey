// FRAMEWORK
import React, { useState } from "react";
import Link from "next/link";
import { Avatar, Box, Center, Heading } from "@chakra-ui/react";

// Component Function
const HeaderAccountNoUser = () => {
  const [loginState, setLoginState] = useState(false);
  return (
    <Box my="auto">
      <Center>
        <Heading as="h5" fontSize="xs" fontWeight="semibold">
          <Link href="/login">Login</Link>
        </Heading>
        <Heading as="h5" mx={2} fontSize="xs" fontWeight="semibold">
          or
        </Heading>
        <Heading as="h5" fontSize="xs" fontWeight="semibold" mr={1}>
          <Link href="/signup">Sign Up</Link>
        </Heading>
        <Link href="/login" passHref>
          <Avatar size="sm" mx={2} cursor="pointer" />
        </Link>
      </Center>
    </Box>
  );
};
export default HeaderAccountNoUser;
