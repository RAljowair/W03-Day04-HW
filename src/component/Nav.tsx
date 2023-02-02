import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Nav() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");

  return (
    <React.Fragment>
      <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="sm">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="../index.html"
              title="Choc Home Page"
              display="flex"
              alignItems="center">
              <VisuallyHidden>Visit Saudi</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize="3xl"
              fontWeight="medium"
              ml="2"
              href="../index.html"
              as={"a"}
              fontFamily={"Kaushan Script"}>
              VisitSaudi
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant="ghost"
                _hover={{ borderBottom: "0.2em solid", borderRadius: "0.2em" }}
                as="a"
                href="../events.html">
                Events
              </Button>
              <Button
                variant="ghost"
                _hover={{ borderBottom: "0.2em solid", borderRadius: "0.2em" }}>
                Pricing
              </Button>
              <Button
                variant="ghost"
                _hover={{ borderBottom: "0.2em solid", borderRadius: "0.2em" }}>
                Faviorate
              </Button>
            </HStack>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              variant="outline">
              Sign in
            </Button>
            <Button
              leftIcon={<MdAirplaneTicket size={"1.3em"} />}
              bg="#39a78e"
              py={"5"}
              fontSize={"md"}
              size="sm"
              color={"white"}
              _hover={{
                color: "#000000",
                bg: "#ffffff",
                border: "1px solid",
                borderColor: "#000000",
              }}>
              Book Flight
            </Button>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="md">
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Feature
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
