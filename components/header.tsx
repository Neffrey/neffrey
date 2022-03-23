// FRAMEWORK
import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

// COMPONENTS
import HeaderAccountBtn from "./header/headerAccountBtn";
import BrandingBtn from "./brandingBtn";
import HeaderMenuBtn from "./headerMenuBtn";


// Component Function
const Header = () => {
  return (
    <Flex bg="gray.200" w="100%">
      <Box w="33%">
        <HeaderMenuBtn />
      </Box>
      <Box w="34%">
        <Center>
          <BrandingBtn />
        </Center>
      </Box>
      <Box w="33%">
        <HeaderAccountBtn />
      </Box>
    </Flex>
  );
};
export default Header;
