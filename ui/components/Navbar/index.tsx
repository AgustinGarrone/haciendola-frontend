"use client";
import { useAuth } from "@/hooks/useAuth";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUserAstronaut, FaSearch, FaPowerOff } from "react-icons/fa";

export const Navbar = () => {
  const { getUserInfo, logout } = useAuth();
  const [username, setUsername] = useState<string | undefined>();

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    const name = getUserInfo()?.name;
    if (localStorage.getItem("accessToken") && name) {
      setUsername(name);
    }
  }, [getUserInfo]);

  return (
    <Flex w="100%" h="5em" alignItems="center" justifyContent="space-between">
      <Flex w="60%">
        <FaUserAstronaut size={24} style={{ marginLeft: "2em" }} />
        <Text ml="2em">Bienvenido de nuevo {username}</Text>
      </Flex>
      <Flex w="100px" justifyContent="space-around" alignItems="center">
        <FaPowerOff cursor="pointer" onClick={logoutHandler} size={24} />
      </Flex>
    </Flex>
  );
};
