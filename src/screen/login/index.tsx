"use client";
import { Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import bgImage from "../../../public/login_back.jpg";
import { LoginForm } from "./components/form";
import { RegisterForm } from "./components/registerForm";

export enum FormMode {
  REGISTER = "REGISTER",
  LOGIN = "LOGIN",
}

export const LoginPage: FC = () => {
  const [formMode, setFormMode] = useState<FormMode>(FormMode.LOGIN);

  return (
    <Flex
      h="100vh"
      w="100%"
      bg="black"
      backgroundImage={`url(${bgImage.src})`}
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex
        bg="#FFF8E1"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        h="100%"
        w="35em"
      >
        {formMode === FormMode.LOGIN ? (
          <LoginForm changeMode={setFormMode} />
        ) : (
          <RegisterForm changeMode={setFormMode} />
        )}
      </Flex>
    </Flex>
  );
};
