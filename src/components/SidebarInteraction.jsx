import { Badge, Box, Text, Tooltip } from "@chakra-ui/react";

export const SidebarMenuItem = ({
  children,
  title = "untitled",
  badgeHover = null,
  badge = null,
  label = null,
}) => {
  return (
    <Tooltip
      label={label}
      placement="right"
      hasArrow
      fontSize="xs"
      maxW="200px"
    >
      <Box
        py={2}
        px={3}
        fontSize="sm"
        borderRadius="md"
        d="flex"
        alignItems="center"
        gap={3}
        textColor="#71718f"
        transition="all"
        transitionDuration="200ms"
        backgroundColor="#ffffff"
        cursor="pointer"
        role="group"
        _hover={{ backgroundColor: "#f2f2f5", color: "#585974" }}
      >
        {children && (
          <Box
            boxSize="20px"
            color="#C5C5D3"
            d="flex"
            alignItems="center"
            justifyContent="center"
            transition="all"
            transitionDuration="200ms"
            _groupHover={{ color: "#585974" }}
          >
            {children}
          </Box>
        )}
        <Text
          isTruncated
          flexGrow={1}
          transition="all"
          transitionDuration="200ms"
          _groupHover={{ color: "#585974" }}
        >
          {title}
        </Text>
        {badge && <Badge colorScheme="yellow">{badge}</Badge>}
        {badgeHover && (
          <Badge
            opacity="0"
            transition="all"
            transitionDuration="200ms"
            fontSize="xs"
            variant="outline"
            display="none"
            _groupHover={{ opacity: "1", display: "block" }}
          >
            {badgeHover}
          </Badge>
        )}
      </Box>
    </Tooltip>
  );
};

export const SidebarDivider = ({ children }) => {
  return (
    <Box
      mt={3}
      py={2}
      pl={3}
      fontSize="xs"
      textTransform="uppercase"
      fontWeight="semibold"
      color="#999999"
    >
      {children}
    </Box>
  );
};
