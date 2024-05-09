import { Flex, Text } from "@chakra-ui/react"
import { FC } from "react"


export const LoginPage : FC = () => {

    return (
        <Flex h="100vh" w="100%" bg="black" alignItems='center' justifyContent='center'>
            <Flex bg="white" direction='column' h="8em" w="12em">
                <Text>Inicia Sesión</Text>
            </Flex>
        </Flex>
    )
}