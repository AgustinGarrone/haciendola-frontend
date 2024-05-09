import { Flex, Text } from "@chakra-ui/react"
import { Navbar } from "../../../ui/components/Navbar"
import { NoteCreation } from "./components/NoteCreation"
import { FC } from "react"

export const HomePage: FC = () => {
  return (
    <Flex h="100vh" w="100vw" display="column" alignItems="center" justifyContent='center'>
      <Navbar />
      <NoteCreation />
    </Flex>
  )
}
