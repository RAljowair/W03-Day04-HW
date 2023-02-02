import React from "react";
import { Box, Flex, Image, Link, chakra, Heading } from "@chakra-ui/react";

export default function Article() {
  return (
    <>
      <Flex
        gap={"5em"}
        bg="#edf3f8"
        _dark={{ bg: "#1E2A27" }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center">
        <Box
          flexDirection={"row"}
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{ bg: "gray.800" }}
          maxW="2xl">
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://cdn.calendar.visitsaudi.com/cms-media/assets/Diriyah_b55b804a7b.jpg"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{ color: "brand.400" }}>
                Event
              </chakra.span>
              <Link
                display="block"
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}>
                Diriyah Season
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}>
                  20 October 2022 - 28 January 2023
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>

        {/* Article 2 */}
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{ bg: "gray.800" }}
          maxW="2xl">
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://cdn.calendar.visitsaudi.com/cms-media/assets/Riyadh_Season_40aa677a78.jpg"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{ color: "brand.400" }}>
                Event
              </chakra.span>
              <Link
                display="block"
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}>
                Riyadh Season "Beyond Imagination"
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}>
                  22 October 2022 - 22 March 2023
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>

        {/* Article 3 */}

        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{ bg: "gray.800" }}
          maxW="2xl">
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://www.experiencealula.com/getmedia/68fa5127-a7da-44a8-bf85-55169be5e375/HegraADPromoNov22?width=781&height=441&ext=.jpg"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{ color: "brand.400" }}>
                Event
              </chakra.span>
              <Link
                display="block"
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{ color: "gray.600", textDecor: "underline" }}>
                Alula Season
              </Link>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.300" }}>
                  21 November 2022 - 22 December 2022
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
