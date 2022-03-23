// FRAMEWORK
import React from "react";
import Link from "next/link";
import { AspectRatio, Flex, Heading, Image, Show } from "@chakra-ui/react";

// COMPONENTS
import LoadAfterRender from "./loadAfterRender";


// Component Function
const BrandingBtn = () => {
  return (
    <Flex p={4}>
      <AspectRatio ratio={1} width={8}>
        <Link href="/" passHref>
          <Image alt="Logo" cursor="pointer" src="/rgbcmyfol-wbrdr-750.png" />
        </Link>
      </AspectRatio>
      <LoadAfterRender>
        <Show above="md">
          <Link href="/" passHref>
            <Heading as="h2" cursor="pointer" ml={2} my="auto" size="md">
              My Brand
            </Heading>
          </Link>
        </Show>
      </LoadAfterRender>
    </Flex>
  );
};
export default BrandingBtn;
