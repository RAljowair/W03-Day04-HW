import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Heading,
  Image,
} from "@chakra-ui/react";
import enjoySaudiImg from "../assets/enjoy_saudi.svg";

export default function Features() {
  return (
    <Flex
      backgroundImage={enjoySaudiImg}
      backgroundRepeat={"no-repeat"}
      _dark={{ bg: "#000" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}>
      <Heading fontSize={"5xl"} pb={"0.8em"} fontFamily={"Kaushan Script"}>
        Future of Saudi
      </Heading>
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}>
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "white" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor">
              The Line
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "white" }}
              fontSize={{ md: "lg" }}>
              THE LINE is a civilizational revolution that puts humans first,
              providing an unprecedented urban living experience while
              preserving the surrounding nature. It redefines the concept of
              urban development and what cities of the future should look like.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
              href="#blank_ https://www.neom.com/en-us/regions/theline">
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            backgroundImage="https://neom.scene7.com/is/image/neom/hrh-announces-theline-designs-cover?wid=1920&hei=1080"
            bgPos="center"
            bgSize="cover"
            borderRadius="1em"></Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}>
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "white" }}
              lineHeight={{ md: "shorter" }}>
              TROJENA
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "white" }}
              fontSize={{ md: "lg" }}>
              Trojena will be an iconic, world-class destination, blending
              natural and developed landscapes – and offering unique
              human-centric experiences for residents and visitors alike. The
              destination will house six distinctive development districts
              centered around tailored experiences that blend real with virtual
              architectural and engineering innovations. All to create a
              destination like no other on earth.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
              href="https://www.neom.com/en-us/regions/the-line">
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={48}
            backgroundImage="https://www.neom.com/content/dam/neom/trojena/c63/mountain-image-bottom.jpeg"
            bgPos="center"
            bgSize="cover"
            borderRadius="1em"></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
