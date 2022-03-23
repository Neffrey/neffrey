// Framework
import React from "react";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import BrandingBtn from "./brandingBtn";

// Component Function
const Footer = () => {
  let currentYear = new Date();
  return (
    <Flex  bg="gray.200" w="100%" wrap="wrap">
      <Box
        sx={{
          "@media only screen and (max-width: 767px)": {
            "& > div > div": { marginX: "auto" },
          },
        }}
        w={["100%", null, null, "33%", null ]}
      >
        <BrandingBtn />
      </Box>
      <Box m="auto" w={["100%", null, null, "34%", null]}>
        <Center>
          <Heading fontSize="lg">FOOTER COMP</Heading>
        </Center>
      </Box>
      <Box m="auto" w={["100%", null, null, "33%", null]}>
        <Text
          textAlign={["center", null, null, "right", null]}
          mx={4}
        >
          Hi Mom
        </Text>
      </Box>
      <Heading as="h6" fontSize="xs" mx="auto">
        Copyright © {currentYear.getFullYear()}
      </Heading>
    </Flex>
  );
};
export default Footer;
