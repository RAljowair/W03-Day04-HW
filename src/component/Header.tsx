import React from "react";
import headerImg from "../assets/header-hero.jpg";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function Header() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage={headerImg}
        bgPos="center"
        bgSize="cover">
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700">
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              fontFamily={"belleza, sans-serif"}
              color="white"
              textTransform="uppercase">
              Welcome to Sauid Arabia{" "}
            </Heading>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
}
