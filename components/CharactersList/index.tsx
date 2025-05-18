"use client";

import { Character } from "@/lib/get-characters-info";
import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import CharacterCard from "../CharacterCard";

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Props {
  characters: Array<Character>;
  info: Info;
  initialPage: number;
}

export default function CharactersList({
  characters,
  info,
  initialPage,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = initialPage;
  const hasNextPage = currentPage < info?.pages;
  const hasPrevPage = currentPage > 1;

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`/characters?${params.toString()}`);
  };

  const handlePrevPage = () => {
    if (hasPrevPage) {
      navigateToPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      navigateToPage(currentPage + 1);
    }
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4} mb={8}>
        {characters.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </SimpleGrid>

      <Box position="sticky" bottom={0} p={4} mt={8}>
        <HStack
          align="center"
          justify={{ base: "space-between", md: "center" }}
          gap={{ base: 0, md: 20 }}
        >
          <Button
            onClick={handlePrevPage}
            bg="secondary.600"
            _hover={{ filter: "brightness(0.9)" }}
            _active={{ filter: "brightness(0.8)" }}
            width={{ base: "64px", sm: "100px" }}
            fontSize={{ base: "10px", sm: "14px" }}
          >
            Previous
          </Button>

          <Box textAlign="center" flexShrink={0}>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
              Page {currentPage} of {info?.pages}
            </Text>
            <Text fontSize="xs" color="gray.500" mt={1}>
              Showing {(currentPage - 1) * 20 + 1}-
              {Math.min(currentPage * 20, info?.count)} of {info?.count}
            </Text>
          </Box>

          <Button
            onClick={handleNextPage}
            bg="secondary.600"
            _hover={{ filter: "brightness(0.9)" }}
            _active={{ filter: "brightness(0.8)" }}
            width={{ base: "64px", sm: "100px" }}
            fontSize={{ base: "10px", sm: "14px" }}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </>
  );
}
