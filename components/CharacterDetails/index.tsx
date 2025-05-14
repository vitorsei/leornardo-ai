import { Character, Episode } from "@/lib/get-characters-info";
import { blurDataURL } from "@/utils/blur-data-url";
import {
  Badge,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Divider from "../layout/Divider";
import { getStatusColor } from "@/utils/get-status-color";

interface Props {
  character: Character;
}

export default function CharacterDetails({ character }: Props) {
  const statusColor = getStatusColor(character.status);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={4}>
        <Box position="relative" width="100%" aspectRatio={1}>
          <Image
            src={character.image || ""}
            alt={character.name || ""}
            fill
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              borderRadius: "0.375rem",
            }}
            priority
          />
        </Box>

        <Box>
          <VStack align="start" gap={3}>
            <HStack>
              <Badge bg={statusColor} px={2} py={1} borderRadius="full">
                {character.status}
              </Badge>
              <Badge colorScheme="purple" px={2} py={1} borderRadius="full">
                {character.species}
              </Badge>
              {character.type && (
                <Badge colorScheme="blue" px={2} py={1} borderRadius="full">
                  {character.type}
                </Badge>
              )}
            </HStack>

            <Box>
              <Text fontWeight="semibold" color="gray.500">
                Gender
              </Text>
              <Text>{character.gender}</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" color="gray.500">
                Origin
              </Text>
              <Text>{character?.origin?.name}</Text>
            </Box>

            <Box>
              <Text fontWeight="semibold" color="gray.500">
                Last Known Location
              </Text>
              <Text>{character?.location?.name}</Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>

      <Divider color="primary.400" />

      <Box mt={4}>
        <Heading as="h3" size="md" mb={4}>
          Episodes
        </Heading>

        {character?.episode?.map((episode: Episode) => (
          <Box flex="1" textAlign="left" fontWeight="medium" key={episode.id}>
            {episode.episode} - {episode.name}
          </Box>
        ))}
      </Box>
    </>
  );
}
