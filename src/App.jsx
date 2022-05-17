import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  Input,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { CardItem } from "./components/Card";

function App() {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const data = await res.json();
      setUser([...data.results]);
    } catch (error) {
      console.error("Data error");
    }
  };

  useEffect(function () {
    getUser();
    console.log(users);
  }, []);

  return (
    <Box h="100vh" d="flex" flexDir="row">
      <Sidebar />
      <Box flexGrow={1} bg="#f6f6f6" h="100%" d="flex" flexDir="column">
        <Header />
        <SimpleGrid
          columns={{ sm: 4, md: 6, lg: 12 }}
          spacing={2}
          mx={8}
          mt={2}
        >
          <GridItem
            w="100%"
            pt={2}
            pb={3}
            d="flex"
            flexDir="column"
            colSpan={{ sm: 4, md: 6, lg: 12 }}
          >
            <Heading>Customers</Heading>
          </GridItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          {users.map((user) => {
            return <CardItem>{user.name.first}</CardItem>;
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default App;
