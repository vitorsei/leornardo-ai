import { Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" py={8} px={8}>
      <Heading
        as="h1"
        size="2xl"
        mb={6}
        color="white-400"
        fontWeight="extrabold"
      >
        Rick and Morty Explorer
      </Heading>
      <Text fontSize="xl" color="whiteAlpha.700">
        Discover characters from the multiverse and explore their details
      </Text>
    </Container>
  );
}
