"use client";
import { Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { MdNoteAdd } from "react-icons/md";

type Props = {
  onCreateClick: Dispatch<SetStateAction<boolean>>;
};

export const NoteCreation: FC<Props> = ({ onCreateClick }) => {
  return (
    <Flex h="5em" w="100%" alignItems="center" justifyContent="center">
      <Text fontSize="3rem">Productos actuales</Text>
      <MdNoteAdd
        cursor="pointer"
        style={{ marginLeft: "4em" }}
        size={40}
        onClick={() => onCreateClick(true)}
      />
    </Flex>
  );
};
