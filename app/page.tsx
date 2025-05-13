import Image from "next/image";

import { Box, Text, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Container maxW="container.xl" py={10}>
          <Box
            textAlign="center"
            py={10}
            px={6}
            borderRadius="xl"
            boxShadow="xl"
            bg="white"
            my={10}
          >
            <Heading
              as="h1"
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Rick and Morty Explorer
            </Heading>

            <Text fontSize="xl" mb={8} color="gray.600">
              Discover characters from the multiverse and explore their details
            </Text>

            {/* <LoginForm /> */}
          </Box>
        </Container>
      </main>
      <footer className="flex justify-center text-black fixed bottom-0 w-full h-12">
        <p className="bg-amber-50 w-full h-full py-6 flex justify-center items-center">
          Challenge Version 3.5
        </p>
      </footer>
    </div>
  );
}
