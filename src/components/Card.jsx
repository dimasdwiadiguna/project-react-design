import { GridItem, HStack, Text, Box, Image, VStack } from "@chakra-ui/react";

export const CardItem = ({ data, children }) => {
  const { name, picture, location } = data;

  return (
    <GridItem
      bg="white"
      colSpan={3}
      borderRadius="md"
      boxShadow="md"
      border="1px"
      borderColor="gray.100"
      h="100px"
      p={3}
    >
      <HStack height="full" gap={2}>
        <Box d="flex" height="full" alignItems="center" justifyContent="center">
          <Image boxSize="48px" src={picture.thumbnail} borderRadius="full" />
        </Box>
        <VStack alignItems="start">
          <Text fontSize="sm" fontWeight="semibold">
            {name.first} {name.last}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {location.country}
          </Text>
        </VStack>
      </HStack>
    </GridItem>
  );
};
