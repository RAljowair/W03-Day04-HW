import React from "react";
import { Badge, Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function EventCard() {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      gap={"5em"}>
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        height={"md"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg">
        <Image
          src="https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2020/08/15150740/LEAP-1200-x-900-1024x768.png"
          roundedTop="lg"
          w={"100%"}
          objectFit={"cover"}
          height={"15em"}
          // height={"4em"}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}>
            LEAP | Global Tech Event In Saudi Arabia
          </Text>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              Feb 6, 2022 - Feb 9, 2022
            </Box>
          </Box>
          <Button>Book</Button>
        </Box>
      </Box>
      {/* card 2 */}
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        height={"md"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg">
        <Image
          src="https://misk.org.sa/wp-content/uploads/2021/11/misk-21-logo-light-1-2048x1177.png"
          roundedTop="lg"
          w={"100%"}
          objectFit={"cover"}
          height={"15em"}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="red">
              Done
            </Badge>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}>
            MISK | 10 years anniversary, celebration
          </Text>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              november 10, 2022 - november 11, 2022
            </Box>
          </Box>
          <Button>Book</Button>
        </Box>
      </Box>
      {/* card 3 */}
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="sm"
        height={"md"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg">
        <Image
          src="https://staging.pro-vision.com/assets/uploads/events/523/3444ebfe3524a959c33de3b92e83e119.jpg"
          roundedTop="lg"
          w={"100%"}
          objectFit={"fill"}
          height={"15em"}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="yellow">
              Closing Soon
            </Badge>
          </Box>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}>
            Marathon | Second marathon at Riyadh
          </Text>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              februry 11, 2023
            </Box>
          </Box>
          <Button>Book</Button>
        </Box>
      </Box>
    </Flex>
  );
}
