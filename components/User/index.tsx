"use client";
import { useUser } from "@/context/UserContext";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function User() {
  const { user } = useUser();
  if (!user) {
    return null;
  }

  return (
    <Link href="/user">
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
    </Link>
  );
}
