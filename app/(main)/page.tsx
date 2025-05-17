import { Button, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      maxW="container.xl"
      py={12}
      px={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        size="2xl"
        mb={6}
        color="white-400"
        fontWeight="extrabold"
      >
        Rick and Morty Explorer
      </Heading>
      <Text fontSize="xl" color="whiteAlpha.700" mb="6">
        Discover characters from the multiverse and explore their details
      </Text>
      <Button
        as="a"
        // @ts-expect-error: Chakra UI Button doesn't accept href when using as="a"
        href="/characters"
        size="lg"
        bg="secondary.600"
        borderRadius="30px"
        _hover={{ filter: "brightness(0.9)" }}
        _active={{ filter: "brightness(0.8)" }}
        mt={2}
      >
        Start Exploring
      </Button>
    </Container>
  );
}
