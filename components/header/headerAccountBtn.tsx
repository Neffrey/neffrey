// FRAMEWORK
import React, { useContext, useState } from "react";
import { Center, Flex } from "@chakra-ui/react";

// COMPONENTS
import HeaderAccountUser from "./headerAccountUser";
import HeaderAccountNoUser from "./headerAccountNoUser";

// CONTEXTS
import { UserContext } from "../../contexts/userProvider";

// Component Function
const AccountBtn = () => {
  // Context
  const { userErrorMsg, userId, userName } = useContext(UserContext);
  return (
    <Flex
      justifyContent="flex-end"
      h="100%"
      className="testclass"
      paddingRight={2}
    >
      <Center>
        {userId ? <HeaderAccountUser /> : <HeaderAccountNoUser />}
      </Center>
    </Flex>
  );
};
export default AccountBtn;
