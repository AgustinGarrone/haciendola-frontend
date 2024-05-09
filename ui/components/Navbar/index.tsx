import { Flex, Text } from "@chakra-ui/react"
import { FaUserAstronaut, FaSearch, FaPowerOff } from "react-icons/fa"

export const Navbar = () => {
  const userName = "Chad"

  return (
    <Flex w="100%" h="5em" alignItems="center" justifyContent="space-between">
      <Flex w="60%">
        <FaUserAstronaut size={24} style={{ marginLeft: "2em" }} />
        <Text ml="2em">Bienvenido de nuevo {userName}</Text>
      </Flex>
      <Flex w="100px" justifyContent="space-around" alignItems="center">
        <FaSearch size={24} />
        <FaPowerOff size={24} />
      </Flex>
    </Flex>
  )
}
