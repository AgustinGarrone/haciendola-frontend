import { Flex, Text } from "@chakra-ui/react"
import { Navbar } from "../../../ui/components/Navbar"
import { FC } from "react"
import { ListedProducts } from "./components/ListedProducts"
import { Footer } from "../../../ui/components/Footer"

export const HomePage: FC = () => {
  return (
    <Flex h="100vh" w="100vw" display="column" alignItems="center" justifyContent='center'>
      <Navbar />
      <ListedProducts/>
      <Footer/>
    </Flex>
  )
}
