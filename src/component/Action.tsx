import { chakra, Box, Stack, Flex, Link } from "@chakra-ui/react";
import enjoySaudiImg from "../assets/visit_saudi.png";

export default function Action() {
  return (
    <Flex
      backgroundImage={enjoySaudiImg}
      bg="white"
      _dark={{ bg: "#000" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center">
      <Flex
        justify="center"
        bg="white"
        _dark={{ bg: "gray.800" }}
        w="full"
        shadow="xl">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}>
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{ color: "gray.100" }}
            mb={6}>
            <chakra.span display="block">Ready for new experince?</chakra.span>
            <chakra.span
              display="block"
              color="grey"
              _dark={{ color: "gray.500" }}>
              Book your journy today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}>
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                _light={{
                  color: "white",
                }}
                bg="#7cb083"
                _hover={{
                  bg: "brand.700",
                }}
                _dark={{ bg: "brand.600", color: "white" }}>
                Get started
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md"></Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
