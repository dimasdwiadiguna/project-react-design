import { Box, Avatar } from "@chakra-ui/react";
import { Breadcrumbs } from "./Breadcrumbs";

export const Header = () => {
  return (
    <Box
      minH="64px"
      px={8}
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Breadcrumbs />
      </Box>
      <Avatar
        size="sm"
        name="Kola Tioluwani"
        src="https://bit.ly/tioluwani-kolawole"
      />{" "}
    </Box>
  );
};
