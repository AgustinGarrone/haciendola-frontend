import React, { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pagesToShow] = useState(5);

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          colorScheme={i === currentPage ? 'blue' : undefined}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <HStack spacing={2}>
      <Button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
      >
        Anterior
      </Button>
      {renderPageButtons()}
      <Button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        isDisabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </HStack>
  );
};

export default Pagination;