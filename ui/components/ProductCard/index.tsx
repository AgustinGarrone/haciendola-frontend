import { Flex, Box, Text, IconButton, Button } from "@chakra-ui/react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

type CardProps = {
  handle: string;
  title: string;
  description: string;
  SKU: string;
  grams: number;
  stock: number;
  price: number;
  comparePrice: number;
  barcode: string;
  onDelete: () => void;
  onEdit: () => void;
};

export const ProductCard = ({
  handle,
  title,
  description,
  SKU,
  grams,
  stock,
  price,
  comparePrice,
  barcode,
  onDelete,
  onEdit,
}: CardProps): JSX.Element => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="4"
      mb="4"
      w="300px"
      position="relative"
    >
      <IconButton
        icon={<FaTrashAlt />}
        colorScheme="red"
        aria-label="Eliminar"
        position="absolute"
        top="2"
        right="2"
        onClick={onDelete}
      />
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Flex>
          <IconButton
            icon={<FaEdit />}
            colorScheme="blue"
            aria-label="Editar"
            mr="2"
            onClick={onEdit}
          />
          <Button colorScheme="blue" size="sm" onClick={onEdit}>
            Editar
          </Button>
        </Flex>
      </Flex>
      <Text mb="2">{description}</Text>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">Precio:</Text>
        <Text>${price}</Text>
      </Flex>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">SKU:</Text>
        <Text>{SKU}</Text>
      </Flex>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">Gramos:</Text>
        <Text>{grams}</Text>
      </Flex>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">Stock:</Text>
        <Text>{stock}</Text>
      </Flex>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">Precio comparativo:</Text>
        <Text>${comparePrice}</Text>
      </Flex>
      <Flex justify="space-between" align="center" mb="2">
        <Text fontWeight="semibold">Código de barras:</Text>
        <Text>{barcode}</Text>
      </Flex>
    </Box>
  );
};
