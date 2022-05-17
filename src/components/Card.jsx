import { GridItem, HStack, Text, Box, Image, VStack } from "@chakra-ui/react";

export const CardItem = ({ data, children }) => {
  const { name, picture, location } = data;

  return (
    <GridItem
      bg="white"
      colSpan={2}
      borderRadius="md"
      boxShadow="md"
      border="1px"
      borderColor="gray.100"
      h="100px"
      p={4}
    >
      <HStack height="full" gap={2}>
        <Box d="flex" height="full" alignItems="center" justifyContent="center">
          <Image boxSize="48px" src={picture.thumbnail} borderRadius="full" />
        </Box>
        <VStack alignItems="start">
          <p>
            {name.first} {name.last}
          </p>
          <Text fontSize="xs">{location.country}</Text>
        </VStack>
      </HStack>
    </GridItem>
  );
};
