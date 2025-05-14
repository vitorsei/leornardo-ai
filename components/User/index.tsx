"use client";
import { useUser } from "@/context/UserContext";
import { Box, Text, HStack, Flex } from "@chakra-ui/react";

export default function User() {
  const { user } = useUser();

  return (
    <HStack>
      <Flex
        bg="secondary.600"
        borderRadius="50%"
        w={10}
        h={10}
        justify="center"
        alignItems="center"
      >
        {user?.username[0]?.toLocaleUpperCase()}
      </Flex>
      <Box>
        <Text>{user?.username}</Text>
        <Text fontSize="xs" color="secondary.400">
          {user?.jobTitle}
        </Text>
      </Box>
    </HStack>
  );
}
