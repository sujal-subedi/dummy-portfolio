import {
  Box,
  Container,
  Stack,
  Button,
  Link,
  Icon,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function SmallWithNavigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}

      <Box
        className="navbar"
        position="fixed"
        width="full"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        shadow="dark-lg"
        // boxShadow={useColorModeValue("0px 4px 19px gray", "0px 1px 19px gray")}
        zIndex="1"
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#portfolio"}>Portfolio</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#languages"}>Languages</Link>
          </Stack>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Icon as={MdDarkMode} w={5} h={5} color="black.900" />
            ) : (
              <Icon as={MdLightMode} w={5} h={5} color="orange.400" />
            )}
          </Button>
        </Container>
      </Box>
    </>
  );
}
