import { Character } from "@/lib/get-characters-info";
import { getStatusColor } from "@/utils/get-status-color";
import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const statusColor = getStatusColor(character.status);

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
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.800"
        opacity="0"
        transition="all 0.3s ease"
        _hover={{ opacity: 1 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={6}
      >
        <Badge
          bg={statusColor}
          mb={4}
          alignSelf="flex-start"
          fontSize="sm"
          px={3}
          py={1}
          borderRadius="full"
        >
          {character.status}
        </Badge>

        <Heading
          as="h3"
          size="md"
          mb={3}
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.4)"
        >
          {character.name}
        </Heading>

        <Text
          fontSize="md"
          color="whiteAlpha.900"
          mb={2}
          textShadow="0 1px 2px rgba(0,0,0,0.4)"
        >
          {character.species}
        </Text>

        <Text
          fontSize="sm"
          color="whiteAlpha.900"
          textShadow="0 1px 2px rgba(0,0,0,0.4)"
        >
          <Text as="span" fontWeight="bold">
            Last known location:
          </Text>
          <br />
          {character?.location?.name}
        </Text>
      </Box>
    </Box>
  );
}
