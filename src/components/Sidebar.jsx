import { Badge, Box, Image } from "@chakra-ui/react";
import { SidebarMenuItem, SidebarDivider } from "./SidebarInteraction";
import logo from "../assets/LogoQore.svg";

export const Sidebar = () => {
  const MenuItem = [
    {
      id: 1,
      title: "Authentication",
      label: "Manage user and authentication method",
      url: "#",
    },
    {
      id: 1,
      title: "Authentication",
      label: "Manage user and authentication method",
      url: "#",
    },
    {
      id: 1,
      title: "Authentication",
      label: "Manage user and authentication method",
      url: "#",
    },
  ];

  return (
    <Box
      w="250px"
      border="2px"
      h="100%"
      borderRight="1px"
      borderColor="#eeeff3"
      d="flex"
      flexDir="column"
    >
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        h={16}
        py={5}
        px={5}
        borderBottom="1px"
        borderColor="#eeeff3"
        mb={4}
      >
        <Image src={logo} h="full" />
        <Badge variant="solid" colorScheme="blue">
          v2.0
        </Badge>
      </Box>
      <Box h="full" px={2}>
        <SidebarMenuItem
          title={"Authentication"}
          label={"Manage user and authentication method"}
        >
          <i class="fa-solid fa-user-gear"></i>
        </SidebarMenuItem>
        <SidebarDivider>Data and Flow</SidebarDivider>
        <SidebarMenuItem
          title={"Qore Data"}
          badgeHover={"Open in tab"}
          label={"Manage database and relations"}
        >
          <i class="fa-solid fa-database"></i>
        </SidebarMenuItem>
        <SidebarMenuItem title={"Workflow"} label={"Data flow automation"}>
          <i class="fa-solid fa-diagram-project"></i>
        </SidebarMenuItem>
        <SidebarMenuItem title={"Integration"} badge={"New"}>
          <i class="fa-solid fa-plug"></i>
        </SidebarMenuItem>
        <SidebarDivider>Front-end tools</SidebarDivider>
        <SidebarMenuItem title={"App Builder"}>
          <i class="fa-solid fa-shapes"></i>
        </SidebarMenuItem>
        <SidebarMenuItem title={"Portal"}>
          <i class="fa-solid fa-cubes"></i>
        </SidebarMenuItem>
      </Box>
      <Box h="72px" w="100%" borderTop="1px" borderColor="#eeeff3" mt={4}>
        Footer
      </Box>
    </Box>
  );
};
