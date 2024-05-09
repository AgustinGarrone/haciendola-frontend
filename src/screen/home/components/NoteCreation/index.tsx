"use client"
import { Flex, Text } from "@chakra-ui/react"
import { FC } from "react"
import { MdNoteAdd } from "react-icons/md"

export const NoteCreation: FC = () => {
  const handleCreation = () => {
    return ""
  }

  return (
    <Flex h="5em" w="100%" alignItems="center" justifyContent="center">
      <Text fontSize="3rem">Productos actuales</Text>
      <MdNoteAdd
        style={{ marginLeft: "4em" }}
        size={40}
        onClick={() => handleCreation()}
      />
    </Flex>
  )
}