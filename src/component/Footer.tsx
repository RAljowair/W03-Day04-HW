import React from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      bg="#fff"
      _dark={{ bg: "gray.800" }}
      p={50}
      alignItems="center"
      justifyContent="center">
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}>
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}>
          VisitSaudi
        </chakra.a>

        <chakra.p
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}>
          All rights reserved
        </chakra.p>

        <Flex mx="-2">
          <chakra.a
            href="https://twitter.com/VisitSaudiAR"
            mx="2"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="twitter">
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </Icon>
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
}
