import { GridItem } from "@chakra-ui/react";

export const CardItem = ({ children }) => {
  return (
    <GridItem
      bg="white"
      colSpan={2}
      borderRadius="md"
      boxShadow="md"
      border="1px"
      borderColor="gray.100"
      h="100px"
    >
      {children}
    </GridItem>
  );
};
