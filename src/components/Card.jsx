import { GridItem, HStack, Text, Box, Image, VStack } from "@chakra-ui/react";

export const CardItem = ({ data, children }) => {
  const { name, picture } = data;

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
      <HStack height="full">
        <Box
          d="flex"
          height="full"
          border="2px"
          alignItems="center"
          justifyContent="center"
        >
          <Image maxH="48px" src={picture.thumbnail} borderRadius="full" />
        </Box>
        <VStack alignItems="center">
          <Text>
            {name.first} {name.last}
          </Text>
        </VStack>
      </HStack>
    </GridItem>
  );
};
