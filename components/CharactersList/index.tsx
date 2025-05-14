"use client";

import { Character } from "@/lib/get-characters-info";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import CharacterCard from "../CharacterCard";

interface Props {
  characters: Array<Character>;
}
export default function CharactersList({ characters }: Props) {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4} mb={8}>
        {characters.map((character) => (
          <Link href={`/character/${character.id}`} key={character?.id}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}
