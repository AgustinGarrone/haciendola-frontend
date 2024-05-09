import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import bgImage from "../../../public/login_back.jpg";
import { LoginForm } from "./components/form";

export const LoginPage: FC = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      bg="black"
      backgroundImage={`url(${bgImage.src})`}
      alignItems="center"
      justifyContent="center"
    >
      <Flex bg="#FFF8E1" direction="column" alignItems='center' justifyContent='flex-start' h="22em" w="30em" borderRadius="1em">
        <LoginForm/>
      </Flex>
    </Flex>
  );
};
