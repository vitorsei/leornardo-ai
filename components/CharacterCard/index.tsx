import { Character } from "@/lib/get-characters-info";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import CharacterCardHover from "./CharacterCardHover";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Box
      position="relative"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      borderColor="whiteAlpha.200"
      boxShadow="lg"
      cursor="pointer"
      role="group"
      aspectRatio={1}
    >
      <Box position="relative" width="100%" height="auto">
        <Image
          src={character.image!}
          alt={character.name!}
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
          priority={false}
        />
      </Box>
      <CharacterCardHover character={character} />
    </Box>
  );
}
