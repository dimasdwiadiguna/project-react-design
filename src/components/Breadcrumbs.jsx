import {
  Box,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
} from "@chakra-ui/react";

export const Breadcrumbs = () => {
  return (
    <Box d="flex" alignItems="center" gap={3}>
      <Breadcrumb
        spacing="12px"
        separator={<i class="fa-solid fa-angle-right fa-xs"></i>}
        fontSize="sm"
        color="#8D8EA9"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <i class="fa-solid fa-house"></i>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Finance team</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" fontWeight="semibold" color="#585974">
            My Current Project
          </BreadcrumbLink>
          <IconButton size="xs" ml={2}>
            <i class="fa-solid fa-caret-down"></i>
          </IconButton>
        </BreadcrumbItem>
      </Breadcrumb>
      <Badge variant="subtle" colorScheme="green">
        Free
      </Badge>
    </Box>
  );
};
