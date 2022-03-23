// Framework
import React from "react";
import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

// Component Function
const ExamplePageLayout = () => {
  return (
    <Flex flexWrap="wrap">
      <Heading as="h3" m={4}>
        Example Page
      </Heading>
      <Text>
        Here is some sample text. Im writing it right now and truly I just wish
        I had lorem ipsum or something inside of vs code so that I wouldnt have
        to write this. But I dont, so I am. Here it is. TADA!!
      </Text>
      <Center>
        <Button
          m={4}
          onClick={(res) => {
            console.log("Example Button Clicked", res);
          }}
        >
          Example Button
        </Button>
      </Center>
    </Flex>
  );
};
export default ExamplePageLayout;
