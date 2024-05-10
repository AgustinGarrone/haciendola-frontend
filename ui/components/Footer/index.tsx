'use client'
import { useState, useEffect } from "react";
import { Flex, Link } from "@chakra-ui/react";

export const Footer = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {contentLoaded && (
        <Flex
          bg="black"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="5em"
        >
          <Link href='https://www.linkedin.com/in/agustingarrone/' color="white">Hecho por Agustin Garrone :)</Link>
        </Flex>
      )}
    </>
  );
};
